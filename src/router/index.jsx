import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ErrorPage from '../pages/Error404'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRouter
