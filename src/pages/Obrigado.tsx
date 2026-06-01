import { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA_LINK = 'https://wa.me/5534996511781?text=Ol%C3%A1%2C+enviei+o+formul%C3%A1rio+e+gostaria+de+continuar+a+conversa.'

export default function Obrigado() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state?.fromForm) {
      navigate('/', { replace: true })
    }
  }, [location.state, navigate])

  if (!location.state?.fromForm) return null

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-gutter py-section-padding">
        <div className="max-w-2xl w-full text-center space-y-10">

          {/* Ícone de confirmação */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: '40px', fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
          </div>

          {/* Texto principal */}
          <div className="space-y-4">
            <span className="inline-block font-label-sm text-label-sm text-primary uppercase tracking-widest">
              Mensagem Enviada
            </span>
            <h1 className="font-h1 text-h1-mobile md:text-h2 text-on-surface">
              Obrigado pelo contato!
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto">
              Recebemos sua mensagem e nossa equipe comercial entrará em contato em breve.
              Caso prefira uma resposta mais rápida, fale conosco diretamente pelo WhatsApp.
            </p>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-label-sm text-label-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
              Falar pelo WhatsApp
            </a>
            <Link
              to="/catalogo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface-container-low border border-outline-variant text-on-surface rounded-xl font-label-sm text-label-sm font-bold uppercase tracking-widest hover:bg-surface-container transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>grid_view</span>
              Ver Catálogo
            </Link>
          </div>

          {/* Detalhes de prazo */}
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 text-left flex gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-secondary-container" style={{ fontSize: '20px' }}>
                schedule
              </span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant tracking-wide mb-1">
                Tempo de Resposta
              </p>
              <p className="font-body-md text-body-md text-on-surface">
                Respondemos em até <strong>1 dia útil</strong> por e-mail ou WhatsApp, dentro do horário de atendimento — Seg–Sex das 8h às 18h e Sáb das 8h às 12h.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
