import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { products, categoryBadge } from '../data/products'

const WA_PARCEIRO = 'https://wa.me/5531987654321?text=Ol%C3%A1%2C+tenho+interesse+em+ser+parceiro+da+Minas+Doce.'
const WA_CATALOGO = 'https://wa.me/5531987654321?text=Ol%C3%A1%2C+gostaria+de+receber+o+cat%C3%A1logo+completo+da+Minas+Doce.'
const WA_CONSULTOR = 'https://wa.me/5531987654321?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+da+Minas+Doce.'
const WA_MARCA_PROPRIA = 'https://wa.me/5531987654321?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento+de+marca+pr%C3%B3pria.'

const featuredIds = [1, 5, 8]
const featured = products.filter((p) => featuredIds.includes(p.id))

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-surface-container-low py-section-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <span className="inline-block font-label-sm text-label-sm text-primary uppercase tracking-widest mb-6">
                Atacado B2B — Minas Gerais
              </span>
              <h1 className="font-h1 text-h1-mobile md:text-h1 text-on-surface mb-6">
                Tradição Mineira<br />no seu PDV
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                Doces artesanais fabricados em Minas Gerais com receitas centenárias.
                Fornecemos para mercados, panificadoras e mercearias em todo o Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WA_PARCEIRO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-body-md font-bold hover:opacity-90 transition-all"
                >
                  <span className="material-symbols-outlined">handshake</span>
                  Seja um Parceiro
                </a>
                <Link
                  to="/catalogo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-body-md font-bold hover:bg-primary/5 transition-all"
                >
                  <span className="material-symbols-outlined">menu_book</span>
                  Ver Catálogo
                </Link>
              </div>
            </div>

            {/* Card de imagem */}
            <div className="relative h-[420px] lg:h-[500px] rounded-xl overflow-hidden group hidden lg:block">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMwl3ikHGkosJywQveEsK4iu6DIDntqb7APzH8PR56rIolpiX3FxeAoQvFYmJYrA097YAE0s1gTm-m0SYGCdKCqxKlxOvxAtjO5oaL-AJW6tU96JsNIFpG-5reTm-_Qjokku20XXAgVALDP0qAE8i0CuYw68rGcuQhdcHpiq13rL7OTThc06UMLSJ6nJiPSiofanz-SZ-gJGoJWuI8dSlHWnIqIJJSH_ahyY2zCk_NwtL6GGT5-JJTvfNnZWOLTfN5UVKoBIqYxE"
                alt="Produção artesanal Minas Doce"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Badge flutuante */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg">
                <div className="text-primary font-bold text-2xl leading-none">+400</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide mt-1">
                  Parceiros Ativos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Produtos em Destaque ─────────────────────────────────────────────── */}
      <section id="produtos" className="py-section-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-12">
            <span className="inline-block font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">
              Linha Completa
            </span>
            <h2 className="font-h2 text-h1-mobile md:text-h2 text-on-surface">
              Produtos em Destaque
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featured.map((p) => (
              <div
                key={p.id}
                className="bg-surface-container-lowest border border-surface-variant rounded-xl overflow-hidden editorial-shadow card-hover"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${categoryBadge[p.category]} px-3 py-1 rounded font-label-sm text-label-sm uppercase`}>
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-h3 text-h3 text-on-surface mb-2">{p.name}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <a
                      href={p.waQuote}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-body-md font-medium hover:opacity-90 transition-all text-center"
                    >
                      Solicitar Orçamento
                    </a>
                    <a
                      href={p.waDetails}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-variant transition-all"
                    >
                      <span className="material-symbols-outlined">visibility</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-10 py-4 rounded-xl font-body-md font-semibold hover:bg-primary/5 transition-all"
            >
              <span className="material-symbols-outlined">grid_view</span>
              Ver todos os produtos
            </Link>
          </div>
        </div>
      </section>

      {/* ── B2B Value Proposition ────────────────────────────────────────────── */}
      <section id="atacado" className="bg-surface-container py-section-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">
                Por que a Minas Doce?
              </span>
              <h2 className="font-h2 text-h1-mobile md:text-h2 text-on-surface mb-6">
                Condições exclusivas para revendedores
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Oferecemos condições logísticas diferenciadas para nossos parceiros B2B
                em todo o Brasil. Prazo de entrega garantido, tabela de preços competitiva
                e suporte comercial dedicado.
              </p>
              <a
                href={WA_PARCEIRO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-body-md font-bold hover:opacity-90 transition-all"
              >
                <span className="material-symbols-outlined">handshake</span>
                Quero ser Parceiro
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: 'local_shipping', title: 'Entrega em todo o Brasil', desc: 'Logística própria para MG e transportadoras parceiras para demais estados.' },
                { icon: 'percent', title: 'Tabela de Atacado', desc: 'Preços progressivos por volume com descontos para pedidos recorrentes.' },
                { icon: 'support_agent', title: 'Consultor Dedicado', desc: 'Cada parceiro tem um consultor comercial exclusivo para atendimento personalizado.' },
                { icon: 'inventory_2', title: 'Estoque Garantido', desc: 'Produção contínua e estoque regulador para nunca deixar o seu PDV vazio.' },
              ].map((item) => (
                <div key={item.icon} className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6">
                  <span className="material-symbols-outlined text-primary mb-3 block" style={{ fontSize: '32px' }}>
                    {item.icon}
                  </span>
                  <h3 className="font-h3 text-body-lg font-semibold text-on-surface mb-2">{item.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Marca Própria ────────────────────────────────────────────────────── */}
      <section id="marca-propria" className="bg-surface-container-lowest py-section-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">
              Serviço Exclusivo
            </span>
            <h2 className="font-h2 text-h1-mobile md:text-h2 text-on-surface mb-4">
              Desenvolva sua Linha com a Nossa Expertise
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Fabricamos doces mineiros tradicionais sob a marca do seu negócio,
              com formulação exclusiva e embalagem personalizada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'label', title: 'Embalagem Personalizada', desc: 'Arte, cores e logotipo do seu negócio em cada produto.' },
              { icon: 'science', title: 'Formulação Exclusiva', desc: 'Receitas adaptadas ao seu público com sabores sob medida.' },
              { icon: 'inventory', title: 'Pedido Mínimo Acessível', desc: 'Lotes iniciais reduzidos para você testar e crescer sem risco.' },
            ].map((item) => (
              <div key={item.icon} className="bg-surface-container border border-surface-variant rounded-xl p-8 text-center">
                <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: '40px' }}>
                  {item.icon}
                </span>
                <h3 className="font-h3 text-h3 text-on-surface mb-3">{item.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={WA_MARCA_PROPRIA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-body-md font-bold hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              Solicitar Orçamento de Marca Própria
            </a>
          </div>
        </div>
      </section>

      {/* ── Nossa Herança ────────────────────────────────────────────────────── */}
      <section id="heranca" className="bg-surface-container py-section-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">
                Nossa História
              </span>
              <h2 className="font-h2 text-h1-mobile md:text-h2 text-on-surface mb-6">
                Três gerações de sabor e tradição
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Fundada em 1978 na cidade de Belo Horizonte, a Minas Doce nasceu de uma
                receita familiar de pé de moleque transmitida de geração em geração.
                O que começou como uma pequena cozinha artesanal hoje é uma indústria
                que abastece centenas de pontos de venda em todo o Brasil.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Mantemos o mesmo cuidado artesanal com ingredientes selecionados e
                processos que respeitam o tempo de cada receita, porque acreditamos que
                qualidade não deve ser negociada.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: '46+', label: 'Anos de história' },
                  { num: '400+', label: 'Parceiros ativos' },
                  { num: '14', label: 'Produtos no catálogo' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-h2 text-h2 text-primary font-bold">{stat.num}</div>
                    <div className="font-body-md text-body-md text-on-surface-variant">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm_1HquZy4YwECDOj1sFD6E5sVj0qhFWil07tIOb57Ad9JrYLjLowbyUj0HSnKJvWoM8Ru9AZcvo3mSQZt0r5-Dv9dYjogywnhZUkkALvF1IlPXOtmB3dMwl8OFQoiFmkRO5L0ZsbVAgRMw8QMM9MS3-jynqqG0V49eg4_Cs1ZDNlZyOGp_oXkpA0e3Ndb1of5nQZrxJNwRjFYrQC8j-jJkgujrMELTZMlfx1QmGmuoFgxGd6t1b1HV_GgiJGsjED9y7IJlYhh84o"
                alt="Fábrica Minas Doce"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA do Catálogo ──────────────────────────────────────────────────── */}
      <section className="bg-inverse-surface py-20">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-h2 text-h1-mobile md:text-h1 text-primary-fixed mb-6">
            Deseja revender nossos produtos?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container/80 max-w-2xl mx-auto mb-10">
            Oferecemos condições logísticas diferenciadas para nossos parceiros B2B em todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={WA_CATALOGO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-container text-on-primary-container rounded-xl font-body-md font-bold hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined">download</span>
              Baixar Catálogo Completo
            </a>
            <a
              href={WA_CONSULTOR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-fixed text-primary-fixed rounded-xl font-body-md font-bold hover:bg-primary-fixed hover:text-on-background transition-all"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </section>

      {/* ── Contato ──────────────────────────────────────────────────────────── */}
      <section id="contato" className="bg-surface py-section-lg border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-12">
            <span className="inline-block font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">
              Fale Conosco
            </span>
            <h2 className="font-h2 text-h1-mobile md:text-h2 text-on-surface">
              Fale com nosso time comercial
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h3 className="font-h3 text-body-lg font-semibold text-on-surface mb-1">Endereço</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Av. das Palmeiras, 1500 — Distrito Industrial<br />
                    Belo Horizonte — MG, CEP 30000-000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <h3 className="font-h3 text-body-lg font-semibold text-on-surface mb-1">Telefone</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">+55 (31) 9876-5432</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h3 className="font-h3 text-body-lg font-semibold text-on-surface mb-1">E-mail</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">sac@minasdoce.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
                <div>
                  <h3 className="font-h3 text-body-lg font-semibold text-on-surface mb-1">Horário de Atendimento</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Segunda a sexta, das 08h às 18h<br />
                    Sábado, das 08h às 12h
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-surface-container border border-surface-variant rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-tertiary mb-4" style={{ fontSize: '56px' }}>chat</span>
              <h3 className="font-h2 text-h2 text-on-surface mb-3">
                Prefere o WhatsApp?
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Nossa equipe está disponível para tirar dúvidas, enviar tabela de preços
                e iniciar seu cadastro de parceiro.
              </p>
              <a
                href={WA_PARCEIRO}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-tertiary text-on-tertiary rounded-xl font-body-md font-bold hover:opacity-90 transition-all text-lg"
              >
                <span className="material-symbols-outlined">chat_bubble</span>
                Falar pelo WhatsApp
              </a>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-4 uppercase tracking-wide">
                Resposta em até 1 hora útil
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
