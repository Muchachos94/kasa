

import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" style={{ color: '#ff6060' }}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error404;