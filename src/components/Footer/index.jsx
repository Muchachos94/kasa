import logo from '../../assets/images/logo.png'
import './footer.scss'

function Footer() {
  return (
    <footer className="kasa-footer">
      <img src={logo} alt="Logo Kasa" className="kasa-footer__logo" />
      <p className="kasa-footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer