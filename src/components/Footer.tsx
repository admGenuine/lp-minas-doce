import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-inverse-surface w-full border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-section-md px-gutter max-w-container-max mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <div className="font-h3 text-h3 text-primary-fixed mb-6">Minas Doce</div>
          <p className="text-on-primary-container/80 font-body-md text-body-md mb-6 leading-relaxed">
            Tradição e qualidade mineira entregues com eficiência para o seu negócio crescer com sabor e confiança.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-primary-fixed-dim hover:bg-primary-fixed hover:text-on-primary-fixed transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest mb-6">Menu</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/catalogo" className="text-on-primary-container/80 hover:text-primary-fixed transition-colors font-body-md text-body-md">
                Catálogo
              </Link>
            </li>
            <li>
              <Link to="/seja-parceiro" className="text-on-primary-container/80 hover:text-primary-fixed transition-colors font-body-md text-body-md">
                Seja Parceiro
              </Link>
            </li>
            <li>
              <Link to="/nossa-historia" className="text-on-primary-container/80 hover:text-primary-fixed transition-colors font-body-md text-body-md">
                Nossa História
              </Link>
            </li>
          </ul>
        </div>

{/* Contato */}
        <div>
          <h4 className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest mb-6">Contato</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-on-primary-container/80">
              <span className="material-symbols-outlined text-primary-fixed mt-0.5" style={{ fontSize: '18px' }}>location_on</span>
              <span className="font-body-md text-body-md">
                Av. das Palmeiras, 1500 — Distrito Industrial<br />
                Belo Horizonte — MG
              </span>
            </li>
            <li className="flex items-center gap-3 text-on-primary-container/80">
              <span className="material-symbols-outlined text-primary-fixed" style={{ fontSize: '18px' }}>call</span>
              <span className="font-body-md text-body-md">(34) 9 9651-1781 · (34) 3851-2508</span>
            </li>
            <li className="flex items-center gap-3 text-on-primary-container/80">
              <span className="material-symbols-outlined text-primary-fixed" style={{ fontSize: '18px' }}>mail</span>
              <span className="font-body-md text-body-md">joseneto@minasdoce.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter py-8 border-t border-white/5 text-center md:text-left">
        <p className="text-on-primary-container/60 font-body-md text-body-md">
          © 2024 Minas Doce Tradicional. Todos os direitos reservados. Qualidade artesanal para parceiros B2B.
        </p>
      </div>
    </footer>
  )
}
