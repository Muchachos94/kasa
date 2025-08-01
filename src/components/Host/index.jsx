import './Host.scss';

function Host({ name, picture }) {
  return (
    <div className="kasa-host">
      <p className="kasa-host__name">
        {name.split(' ')[0]}<br />
        {name.split(' ')[1]}
      </p>
      <img src={picture} alt={`Hôte ${name}`} className="kasa-host__image" />
    </div>
  );
}

export default Host;