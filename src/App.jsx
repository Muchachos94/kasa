import './styles/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './router'


function App() {
  return (
    <>
      <Header />
      <main>
       <AppRouter />
      </main>
       <Footer />
    </>
  )
}

export default App

