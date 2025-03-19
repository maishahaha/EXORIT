import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'

// Page imports will go here
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
            <Route path="careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
