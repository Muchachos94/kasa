import Banner from '../../components/Banner'
import bannerImage from '../../assets/images/banner-home.png'  
import Gallery from '../../components/Gallery'
function Home() {
  return (
    <main>
      <Banner cover={bannerImage}/>
      <Gallery />
    </main>
  )
}

export default Home