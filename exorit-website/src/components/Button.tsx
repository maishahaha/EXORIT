import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary border-primary text-white hover:bg-primary/90 hover:text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary border-secondary text-white hover:bg-secondary/90 hover:text-white shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:border-primary transition-all duration-300'
  }
  
  // Size styles
  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-2.5 px-6',
    lg: 'text-lg py-3 px-8'
  }
  
  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  
  // Combine all styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`
  
  // Render based on link type (internal, external, or button)
  if (to) {
    return <Link to={to} className={buttonClasses}>{children}</Link>
  }
  
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>{children}</a>
  }
  
  return (
    <button type={type} className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button