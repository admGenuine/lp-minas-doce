import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Partner from './pages/Partner'
import History from './pages/History'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/parceiro" element={<Partner />} />
        <Route path="/historia" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}
