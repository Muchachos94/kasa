import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.scss'

function Header() {
  return (
    <header className="kasa-header">
      <img src={logo} alt="Logo de Kasa" className="kasa-logo" />
      <nav className="kasa-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
