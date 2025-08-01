import './Banner.scss'

function Banner({ cover, showText = true, lightOverlay = false }) {
  return (
    <div className={`kasa-banner ${lightOverlay ? 'light' : ''}`}>
      <img 
      src={cover} 
      alt="Falaises en bord de mer" 
      className="kasa-banner__image" 
      />

      {showText && (
      <h1 className="kasa-banner__text">
       <span className="nowrap">Chez vous,</span>
        <span className="nowrap"> partout et ailleurs</span>
      </h1>
      )}
    </div>
  );
}

export default Banner