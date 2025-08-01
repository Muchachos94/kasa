import { Link } from 'react-router-dom'
import './Error404.scss'

function Error404() {
  return (
    <div className="kasa-error">
      <h1 className="kasa-error__code">404</h1>
      <p className="kasa-error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="kasa-error__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error404