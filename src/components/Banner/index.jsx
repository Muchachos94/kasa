import './Banner.scss'
import bannerImage from '../../assets/images/banner-home.png' 

function Banner() {
  return (
    <div className="kasa-banner">
      <img src={bannerImage} alt="Falaises en bord de mer" className="kasa-banner__image" />
      <h1 className="kasa-banner__text">
       <span className="nowrap">Chez vous,</span>
        <span className="nowrap"> partout et ailleurs</span>
      </h1>
    </div>
  )
}

export default Banner