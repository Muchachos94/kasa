import { useParams, Navigate } from 'react-router-dom';
import logements from '../../data/logements.json';

import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import Host from '../../components/Host';
import Collapse from '../../components/Collapse';

import './Logement.scss';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/Error404" />;
  }

  return (
<main className="kasa-logement">
  <Slideshow pictures={logement.pictures} />

  <div className="kasa-logement__header">

    <div className="kasa-logement__left">
      <h1 className="kasa-logement__title">{logement.title}</h1>
      <p className="kasa-logement__location">{logement.location}</p>
      <div className="kasa-tags">
        {logement.tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
    </div>

    <div className="kasa-logement__right">
      <Host name={logement.host.name} picture={logement.host.picture} />
      <Rating rating={logement.rating} />
    </div>
  </div>
<div className="kasa-logement__collapse-container">
  <div className="kasa-logement__collapses">
  <Collapse
    title="Description"
    content={logement.description}
    variant="logement"
  />
</div>

  <div className="kasa-logement__collapses">
  <Collapse
    title="Équipements"
    content={
      <ul>
        {logement.equipments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    }
    variant="logement"
  />
  </div>
</div>
</main>
  );
}

export default Logement;