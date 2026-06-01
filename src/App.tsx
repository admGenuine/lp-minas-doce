import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import Contact from './pages/Contact'
import Obrigado from './pages/Obrigado'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <PageTransition key={location.pathname}>
        <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/obrigado" element={<Obrigado />} />
      </Routes>
    </PageTransition>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
