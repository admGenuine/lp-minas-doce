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
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>public</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-primary-fixed-dim hover:bg-primary-fixed hover:text-on-primary-fixed transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>photo_camera</span>
            </a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest mb-6">Menu</h4>
          <ul className="space-y-4">
            <li>
              <a href="/#atacado" className="text-on-primary-container/80 hover:text-primary-fixed transition-colors font-body-md text-body-md">
                Termos de Atacado
              </a>
            </li>
            <li>
              <Link to="/catalogo" className="text-on-primary-container/80 hover:text-primary-fixed transition-colors font-body-md text-body-md">
                Catálogo
              </Link>
            </li>
            <li>
              <a href="#" className="text-on-primary-container/80 hover:text-primary-fixed transition-colors font-body-md text-body-md">
                Certificações de Qualidade
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest mb-6">Legal</h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-on-primary-container/80 hover:text-primary-fixed transition-colors font-body-md text-body-md">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="text-on-primary-container/80 hover:text-primary-fixed transition-colors font-body-md text-body-md">
                LinkedIn
              </a>
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
              <span className="font-body-md text-body-md">+55 (31) 9876-5432</span>
            </li>
            <li className="flex items-center gap-3 text-on-primary-container/80">
              <span className="material-symbols-outlined text-primary-fixed" style={{ fontSize: '18px' }}>mail</span>
              <span className="font-body-md text-body-md">sac@minasdoce.com.br</span>
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
