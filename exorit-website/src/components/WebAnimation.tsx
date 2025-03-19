import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  life: number
  opacity: number
}

const WebAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)
  const isInitializedRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || isInitializedRef.current) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    isInitializedRef.current = true

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resizeCanvas()

    const createParticle = (x: number, y: number, speedX: number, speedY: number): Particle => ({
      x,
      y,
      size: Math.random() * 4 + 2, // Increase the size range slightly
      speedX: speedX * (Math.random() * 0.5 + 0.5),
      speedY: speedY * (Math.random() * 0.5 + 0.5),
      life: 1,
      opacity: Math.random() * 0.5 + 0.3
    })

    const updateParticles = () => {
      const mouse = mouseRef.current
      const speedX = (mouse.x - mouse.prevX) * 0.1
      const speedY = (mouse.y - mouse.prevY) * 0.1

      // Add fewer particles based on mouse movement
      if (Math.abs(speedX) > 0.1 || Math.abs(speedY) > 0.1) {
        for (let i = 0; i < 2; i++) { // Reduced from 3 to 2
          particlesRef.current.push(
            createParticle(mouse.x, mouse.y, speedX, speedY)
          )
        }
      }

      // Update and remove particles
      particlesRef.current = particlesRef.current
        .map(particle => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
          life: particle.life - 0.01, // Slower decay for longer visibility
          size: particle.size * 0.98,
          opacity: particle.opacity * 0.98
        }))
        .filter(particle => particle.life > 0)

      mouse.prevX = mouse.x
      mouse.prevY = mouse.y
    }

    const drawParticles = () => {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particlesRef.current.forEach(particle => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * particle.life})`
        ctx.fill()
      })

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j]
          const dx = other.x - particle.x
          const dy = other.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) { // Increased connection distance
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              (1 - distance / 150) * 0.2 * particle.life * other.life
            })`
            ctx.stroke()
          }
        }
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Only update if mouse is within canvas bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = {
          x,
          y,
          prevX: mouseRef.current.x,
          prevY: mouseRef.current.y
        }
      }
    }

    const handleMouseEnter = () => {
      mouseRef.current = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        prevX: canvas.width / 2,
        prevY: canvas.height / 2
      }
    }

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseenter', handleMouseEnter)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseenter', handleMouseEnter)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      isInitializedRef.current = false
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        pointerEvents: 'none',
        touchAction: 'none'
      }}
    />
  )
}

export default WebAnimation