import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const onCatalog = pathname === '/catalogo'
  const onContact = pathname === '/contato'

  const closeMenu = () => setMenuOpen(false)

  const linkBase = 'font-body-md text-body-md transition-colors'
  const linkIdle = 'text-on-surface-variant hover:text-primary'
  const linkActive = 'text-primary font-bold border-b-2 border-primary pb-0.5'

  return (
    <header className="bg-surface/95 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant">
      <nav className="relative flex items-center justify-between h-20 px-gutter max-w-container-max mx-auto">
        {/* Logo */}
        <Link to="/" className="font-h3 text-h3 text-primary shrink-0 hover:opacity-75 transition-opacity">
          Minas Doce
        </Link>

        {/* Desktop Nav + CTA */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/catalogo"
            className={`${linkBase} ${onCatalog ? linkActive : linkIdle}`}
          >
            Catálogo
          </Link>
          <Link
            to="/contato"
            className={`${linkBase} ${onContact ? linkActive : linkIdle}`}
          >
            Contato
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-body-md font-semibold hover:opacity-90 transition-all shrink-0"
          >
            Solicitar Orçamento
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="material-symbols-outlined text-primary">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-outline-variant px-gutter pb-6">
          <div className="flex flex-col pt-4">
            <Link
              to="/catalogo"
              onClick={closeMenu}
              className={`${linkBase} ${onCatalog ? linkActive : linkIdle} py-3 border-b border-outline-variant/50`}
            >
              Catálogo
            </Link>
            <Link
              to="/contato"
              onClick={closeMenu}
              className={`${linkBase} ${onContact ? linkActive : linkIdle} py-3 border-b border-outline-variant/50`}
            >
              Contato
            </Link>
            <Link
              to="/contato"
              onClick={closeMenu}
              className="mt-4 px-6 py-3 bg-primary text-on-primary rounded-xl font-body-md font-semibold text-center hover:opacity-90 transition-all"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
