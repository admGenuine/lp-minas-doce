import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { products, CATEGORIES, categoryBadge, type Category } from '../data/products'

const CARDS_PER_LOAD = 6

const WA_CATALOGO = 'https://wa.me/5531987654321?text=Ol%C3%A1%2C+gostaria+de+receber+o+cat%C3%A1logo+completo+da+Minas+Doce.'
const WA_CONSULTOR = 'https://wa.me/5531987654321?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+da+Minas+Doce.'

export default function Catalog() {
  const [selected, setSelected] = useState<Category[]>([...CATEGORIES])
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_LOAD)

  const filtered = useMemo(
    () => products.filter((p) => selected.includes(p.category)),
    [selected],
  )

  const displayed = filtered.slice(0, visibleCount)
  const remaining = filtered.length - visibleCount

  const toggle = (cat: Category) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    )
    setVisibleCount(CARDS_PER_LOAD)
  }

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <div className="max-w-container-max mx-auto px-gutter py-section-padding">
        {/* Page header */}
        <section className="mb-16">
          <span className="inline-block font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">
            Linha Completa
          </span>
          <h1 className="font-h1 text-h1-mobile md:text-h2 text-on-surface">
            Catálogo de Produtos
          </h1>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* ── Sidebar de filtros ──────────────────────────────────────────── */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 lg:sticky lg:top-28">
              <h2 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-6">
                Filtrar por linha
              </h2>
              <div className="space-y-4">
                {CATEGORIES.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selected.includes(cat)}
                      onChange={() => toggle(cat)}
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/30 cursor-pointer"
                    />
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-outline-variant/50 space-y-3">
                <button
                  onClick={() => { setSelected([...CATEGORIES]); setVisibleCount(CARDS_PER_LOAD) }}
                  className="w-full text-center font-label-sm text-label-sm text-primary hover:underline uppercase tracking-wide"
                >
                  Selecionar tudo
                </button>
                <button
                  onClick={() => { setSelected([]); setVisibleCount(CARDS_PER_LOAD) }}
                  className="w-full text-center font-label-sm text-label-sm text-on-surface-variant hover:underline uppercase tracking-wide"
                >
                  Limpar filtros
                </button>
              </div>
            </div>
          </aside>

          {/* ── Product Grid ────────────────────────────────────────────────── */}
          <div className="flex-1">
            {selected.length === 0 ? (
              <div className="py-24 text-center">
                <span className="material-symbols-outlined text-outline mb-4 block" style={{ fontSize: '64px' }}>
                  search_off
                </span>
                <p className="font-h3 text-h3 text-on-surface-variant">Nenhuma categoria selecionada</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Marque pelo menos uma categoria na lateral para ver os produtos.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {displayed.map((p) => (
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

                {remaining > 0 && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setVisibleCount((v) => v + CARDS_PER_LOAD)}
                      className="inline-flex items-center gap-2 border-2 border-primary text-primary px-10 py-4 rounded-xl font-body-md font-semibold hover:bg-primary/5 transition-all"
                    >
                      <span className="material-symbols-outlined">expand_more</span>
                      Ver mais ({remaining} produto{remaining !== 1 ? 's' : ''})
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── B2B CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-inverse-surface py-20 mt-20">
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

      <Footer />
    </div>
  )
}
