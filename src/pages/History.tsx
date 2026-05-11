import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA_CATALOGO = 'https://wa.me/5531987654321?text=Ol%C3%A1%2C+gostaria+de+receber+o+cat%C3%A1logo+completo+da+Minas+Doce.'
const WA_CONSULTOR = 'https://wa.me/5531987654321?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+da+Minas+Doce.'

export default function History() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hero-gradient py-section-padding flex items-center justify-center min-h-[540px] text-center px-gutter">
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm mb-6">
            DESDE 1982
          </span>
          <h1 className="font-h1 text-h1-mobile md:text-h1 text-on-background mb-6">
            Nossa História: Tradição que atravessa gerações
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Conheça a jornada da Minas Doce, onde o carinho de uma receita de família se
            transformou na maior referência em doces tradicionais para o mercado B2B brasileiro.
          </p>
        </div>
      </section>

      {/* ── Bento de Origem ──────────────────────────────────────────────────── */}
      <section className="py-section-padding px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* ── Linha 1 ── */}

          {/* Imagem principal — col-span-7 */}
          <div className="md:col-span-7 h-[320px] md:h-[500px] rounded-xl overflow-hidden relative group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMwl3ikHGkosJywQveEsK4iu6DIDntqb7APzH8PR56rIolpiX3FxeAoQvFYmJYrA097YAE0s1gTm-m0SYGCdKCqxKlxOvxAtjO5oaL-AJW6tU96JsNIFpG-5reTm-_Qjokku20XXAgVALDP0qAE8i0CuYw68rGcuQhdcHpiq13rL7OTThc06UMLSJ6nJiPSiofanz-SZ-gJGoJWuI8dSlHWnIqIJJSH_ahyY2zCk_NwtL6GGT5-JJTvfNnZWOLTfN5UVKoBIqYxE"
              alt="Processo de produção artesanal"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-h3 text-h3 text-white mb-2">O Início em Minas Gerais</h3>
              <p className="text-white/80 font-body-md text-body-md max-w-md">
                Tudo começou em uma pequena cozinha no interior mineiro, onde o segredo
                estava no tempo e na paciência.
              </p>
            </div>
          </div>

          {/* Bloco de texto — col-span-5 */}
          <div className="md:col-span-5 md:h-[500px] bg-surface-container-lowest border border-outline-variant/30 p-8 md:p-12 rounded-xl flex flex-col justify-center">
            <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: '36px' }}>
              skillet
            </span>
            <h2 className="font-h2 text-h1-mobile md:text-h2 text-on-surface mb-6">
              A Receita da Vovó
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Nossas receitas não foram criadas em laboratórios, mas sim testadas e aprovadas
              por gerações ao redor da mesa. O que começou como um mimo para vizinhos, logo se
              tornou um negócio próspero movido pela paixão.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Mantemos até hoje o mesmo processo de cocção lenta, garantindo a textura perfeita
              que só o verdadeiro doce artesanal possui.
            </p>
          </div>

          {/* ── Linha 2 — 3 colunas iguais ── */}

          {/* Card verde — Ingredientes */}
          <div className="md:col-span-4 h-[320px] md:h-[360px] bg-tertiary-container text-on-tertiary-container p-8 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="font-h3 text-h3 font-semibold mb-4">Ingredientes Selecionados</h3>
              <p className="font-body-md text-body-md opacity-90">
                Trabalhamos apenas com produtores locais que compartilham do nosso compromisso
                com a terra e com a pureza.
              </p>
            </div>
            <span className="material-symbols-outlined opacity-60" style={{ fontSize: '36px' }}>
              eco
            </span>
          </div>

          {/* Card bege — Evolução (só texto) */}
          <div className="md:col-span-4 h-[320px] md:h-[360px] bg-surface-container p-8 rounded-xl flex flex-col justify-center">
            <h3 className="font-h3 text-h3 text-on-surface mb-4">Evolução Profissional</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Em 2010, expandimos nossa planta produtiva para atender distribuidores em todo
              o país, sem nunca perder a essência do "feito em casa".
            </p>
          </div>

          {/* Imagem da fábrica */}
          <div className="md:col-span-4 h-[320px] md:h-[360px] rounded-xl overflow-hidden relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvzn8p_hIwYoL5xFPgDqJZkGoiST0L4rOoHWOFbvr6jkkLR0tpwZ2QMy0xzTgt3z_bTn17brukxA26aZZIcOs3tCq45iWPwpwYscTSDo7MOy3DZe7HLcXV45-MzPGAZEw7OyyUYHLlNKUsP7DqKtMNw4dDJbS6DBjRLhCUOcRC0G3g5rED0CCaO_Bt3CFY-k1UvpZtSk_fHrhXt9gv6moTU0V9ceGPSAVumnzmtHUPzfYQFobYtqrutyfKeN2TSHxSXX8kgd_OdKg"
              alt="Fábrica moderna Minas Doce"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ── Valores / DNA ────────────────────────────────────────────────────── */}
      <section className="bg-on-background py-section-padding text-white overflow-hidden relative">
        {/* Ícone decorativo de fundo */}
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none">
          <span className="material-symbols-outlined" style={{ fontSize: '400px', lineHeight: 1 }}>
            auto_awesome
          </span>
        </div>

        <div className="px-gutter max-w-container-max mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary-fixed-dim font-label-sm text-label-sm tracking-widest block mb-4 uppercase">
                Nosso DNA
              </span>
              <h2 className="font-h2 text-h1-mobile md:text-h1 text-white">
                Compromisso com a Excelência Comercial
              </h2>
            </div>
            <p className="text-surface-variant font-body-md text-body-md max-w-sm">
              Unimos o coração da produção artesanal com a inteligência logística exigida pelo
              B2B contemporâneo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: 'verified',
                title: 'Qualidade Inegociável',
                desc: 'Cada lote passa por uma auditoria sensorial rigorosa antes de ser liberado para envio.',
              },
              {
                icon: 'local_shipping',
                title: 'Logística Ágil',
                desc: 'Sistemas inteligentes de gestão de estoque para garantir que seu pedido chegue sempre fresco.',
              },
              {
                icon: 'handshake',
                title: 'Parceria B2B',
                desc: 'Não somos apenas fornecedores. Somos parceiros estratégicos no crescimento do seu negócio.',
              },
            ].map((item) => (
              <div key={item.icon} className="group">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-primary">{item.icon}</span>
                </div>
                <h4 className="font-h3 text-h3 text-white mb-4">{item.title}</h4>
                <p className="text-surface-variant font-body-md text-body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-section-padding px-gutter max-w-container-max mx-auto">
        <div className="bg-surface-container rounded-xl px-10 py-20 md:px-20 md:py-32 text-center border border-outline-variant/10 relative overflow-hidden">
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-h2 text-h1-mobile md:text-h2 text-on-surface mb-8 max-w-3xl mx-auto">
              Pronto para oferecer o sabor da verdadeira tradição aos seus clientes?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={WA_CATALOGO}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-label-sm text-label-sm uppercase tracking-widest hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">download</span>
                Baixar Catálogo Atacadista
              </a>
              <a
                href={WA_CONSULTOR}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-on-background text-on-background px-10 py-4 rounded-xl font-label-sm text-label-sm uppercase tracking-widest hover:bg-on-background hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">support_agent</span>
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
