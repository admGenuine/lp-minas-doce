import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const WA_ORCAMENTO = 'https://wa.me/5531987654321?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento+da+Minas+Doce.'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const onCatalog = pathname === '/catalogo'
  const onPartner = pathname === '/parceiro'
  const onHistory = pathname === '/historia'
  const onHome = pathname === '/'

  const anchor = (hash: string) => (onHome ? hash : `/${hash}`)

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

        {/* Desktop Nav — centered */}
        <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          <Link
            to="/catalogo"
            className={`${linkBase} ${onCatalog ? linkActive : linkIdle}`}
          >
            Catálogo
          </Link>
          <Link
            to="/parceiro"
            className={`${linkBase} ${onPartner ? linkActive : linkIdle}`}
          >
            Seja Parceiro
          </Link>
          <Link
            to="/historia"
            className={`${linkBase} ${onHistory ? linkActive : linkIdle}`}
          >
            Nossa História
          </Link>
          <a
            href={anchor('#contato')}
            className={`${linkBase} ${linkIdle}`}
          >
            Contato
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href={WA_ORCAMENTO}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-body-md font-semibold hover:opacity-90 transition-all shrink-0"
        >
          Solicitar Orçamento
        </a>

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
              to="/parceiro"
              onClick={closeMenu}
              className={`${linkBase} ${onPartner ? linkActive : linkIdle} py-3 border-b border-outline-variant/50`}
            >
              Seja Parceiro
            </Link>
            <Link
              to="/historia"
              onClick={closeMenu}
              className={`${linkBase} ${onHistory ? linkActive : linkIdle} py-3 border-b border-outline-variant/50`}
            >
              Nossa História
            </Link>
            <a
              href={anchor('#contato')}
              onClick={closeMenu}
              className={`${linkBase} ${linkIdle} py-3 border-b border-outline-variant/50`}
            >
              Contato
            </a>
            <a
              href={WA_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 px-6 py-3 bg-primary text-on-primary rounded-xl font-body-md font-semibold text-center hover:opacity-90 transition-all"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
