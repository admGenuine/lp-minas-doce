import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const INTERESTS = [
  'Distribuição Atacadista',
  'Revenda em Varejo/Empório',
  'Exportação',
]

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  city: string
  interest: string
  message: string
}

export default function Home() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    interest: INTERESTS[0],
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      'Olá, gostaria de ser parceiro da Minas Doce.',
      '',
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      `WhatsApp: ${form.phone}`,
      `Empresa: ${form.company}`,
      `Cidade: ${form.city}`,
      `Interesse: ${form.interest}`,
    ]
    if (form.message.trim()) lines.push('', `Mensagem: ${form.message}`)
    window.open(`https://wa.me/5531987654321?text=${encodeURIComponent(lines.join('\n'))}`, '_blank')
  }

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="py-section-padding px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase">
              Expansão de Mercado B2B
            </span>
            <h1 className="font-h1 text-h1-mobile md:text-h1 text-on-background">
              Leve o sabor da{' '}
              <span className="text-primary italic">tradição mineira</span> para sua loja.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Seja um distribuidor ou revendedor autorizado Minas Doce. Oferecemos condições
              exclusivas de atacado, suporte logístico nacional e produtos com selo de qualidade
              artesanal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-colors inline-flex items-center gap-2"
              >
                Seja um Parceiro
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl aspect-[4/3] relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfaVezl1St-cjTpVjumLF8_YI4JzzNsJvfQqEhE6KbuKSoh9EOtno264EijC7BC3XoL4Hlr3DDi073InJIwwiDfPSa2bizA7aALqDz1yon4TzugSGo7R5yVv6iAVDzqr5AXIxj5O6ga0XtlwkzHAGVxQI54qZ0KGENyRddHdfYQZCEU_DpZc2jplHdd-moLYFIBnZ8Roa2nqtnWlbnXtyG6k8clj-7QX5_IMvhqDJoBITT6rTGEJLjEZQdrl_kZ9dCMeYyIjGOOzI"
                alt="Interior de loja parceira Minas Doce"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-outline-variant/30 hidden md:block">
              <div className="text-primary font-bold" style={{ fontSize: '36px', lineHeight: '1.2' }}>+2.5k</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">PDVs Parceiros</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Propositions — Bento Grid ──────────────────────────────────── */}
      <section className="py-section-padding px-gutter bg-surface-container-low mt-8">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-h2 text-h1-mobile md:text-h2 text-on-surface">
              Por que escolher a Minas Doce?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Aliamos a tradição da produção em pequenos lotes com a eficiência logística que seu negócio exige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — Logística Ágil */}
            <div className="tonal-card p-8 rounded-xl flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-primary mb-6 block" style={{ fontSize: '40px' }}>
                  local_shipping
                </span>
                <h3 className="font-h3 text-h3 text-on-surface mb-4">Logística Ágil</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Entrega rápida em todo o território nacional com rastreio em tempo real e embalagens seguras.
                </p>
              </div>
            </div>

            {/* Card 2 — Qualidade Artesanal (destaque, 2 colunas) */}
            <div className="p-8 rounded-xl flex flex-col justify-between min-h-[300px] md:col-span-2 bg-primary text-on-primary">
              <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                <div className="flex-1">
                  <span className="material-symbols-outlined mb-6 block" style={{ fontSize: '40px' }}>
                    verified
                  </span>
                  <h3 className="font-h3 text-h3 text-white mb-4">Qualidade Artesanal</h3>
                  <p className="font-body-md text-body-md opacity-90">
                    Produtos fabricados com ingredientes selecionados de produtores locais, seguindo receitas centenárias da nossa família.
                  </p>
                </div>
                <div className="hidden lg:block w-1/3 aspect-square rounded-lg overflow-hidden border border-white/20">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAt8VTitAD7go8Wt5jplik17En6lJk4ghwjPatQv3NbTp3xiEB9JF5JMqSPsJLWkWhrkTXVaVPn2O4dF6h5wxlxj706FxXVUP1smBeflQ7IqkfWyrfeSB689MyhyTJUCkKw2AIY2VKz19M_SdZGQ5Fq-V3kWUnJFQGDodj6klxjUgi3QnQw_mmn33jOpRTOeQGq_7tNToo2ETKXjmrg_CPMTVO7c7yD4gu8QdtXnOuIrYqBXgXbwTxzEldoNDKDjYfQHfAi2zWd5s"
                    alt="Produção artesanal de doces"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 — Suporte ao Lojista (2 colunas) */}
            <div className="tonal-card p-8 rounded-xl flex flex-col justify-between min-h-[300px] md:col-span-2">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center h-full">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-primary mb-6 block" style={{ fontSize: '40px' }}>
                    support_agent
                  </span>
                  <h3 className="font-h3 text-h3 text-on-surface mb-4">Suporte ao Lojista</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Consultoria de vendas, materiais de PDV (displays e wobblers) e treinamento para sua equipe de vendas.
                  </p>
                </div>
                <div className="hidden lg:block w-1/3 aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATR_eDCYNLGSPpY60JyXXrusdjvufv612g2Dtjs6zdkusQ0d6Kj_2wj5CmgZ_8NWM5M4RrQhkwGB0D09-J7q1d3V1AxFPG1iPNLabn00GSt9Z95bA1bh0Ksmt-LuPbitwihCpG3DDUZb0FPu2IzGJKo_dkxS4xuhZwcf9bafuo3dAyQh5-iuBkWEs9T_o-Sgw_Zog679mzl3uxhYw22rVFLBeBeic29gwXmDSZ6l0nZuLnnOLwlv_vxwvps8KodrocpmgdHAj3s3o"
                    alt="Reunião comercial"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 — Margens Competitivas */}
            <div className="tonal-card p-8 rounded-xl flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="material-symbols-outlined text-primary mb-6 block" style={{ fontSize: '40px' }}>
                  payments
                </span>
                <h3 className="font-h3 text-h3 text-on-surface mb-4">Margens Competitivas</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Tabela diferenciada para grandes volumes, garantindo alta lucratividade e rotatividade para seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Presença Nacional ─────────────────────────────────────────────────── */}
      <section className="py-section-padding px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-lg border border-outline-variant/30 h-[500px] w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlaWDGBBdKYiZ6EhZVb06jpjer4YTwi0xZ3BbnHnO6sreYDmII9jHzsjlP16vQWQVCTzbLvrXPijFFajux4ZkkqQiO_7UgtUiKfV41MrtLXoFmNXDMxRxM1FzkCBhC5VznrVfmvkR9YtfdTxFisyp9TyuBkCvE8F_YprgT-maAOoQMXuK6gOrhM12ouwUzPDZu2CfFvKYvj9J-EQ6z4xqYOzh4NJJA38YHMj6khuUGQPxMN42ZcD0hwMxqj7jJuyiKxbTwWpKDtrw"
                alt="Mapa de distribuição Minas Doce no Brasil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-h2 text-h1-mobile md:text-h2 text-on-surface">
              Presença em todo o Brasil
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Nossa malha logística atende desde capitais até o interior profundo, garantindo
              produtos frescos em qualquer região.
            </p>
            <ul className="space-y-4">
              {[
                'Logística Refrigerada Especializada',
                'Centros de Distribuição em 5 estados',
                'Exportação para Mercados Premium',
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-tertiary-fixed" style={{ fontSize: '16px' }}>
                      check
                    </span>
                  </span>
                  <span className="font-body-md text-body-md font-medium text-on-surface">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-outline-variant/30">
              <p className="font-body-md text-body-md italic text-on-surface-variant">
                "A rapidez na entrega e o suporte nas reposições foram fundamentais para o
                crescimento da nossa seção de empório."
              </p>
              <p className="font-body-md text-body-md font-bold text-on-surface mt-2">
                — Ricardo Mendes, Rede de Supermercados Verdemar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Formulário de Contato ─────────────────────────────────────────────── */}
      <section
        id="contact-form"
        className="py-section-padding px-gutter bg-on-background text-white relative overflow-hidden"
      >
        {/* Accent bg */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-5 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — info */}
            <div className="space-y-8">
              <h2 className="font-h2 text-h1-mobile md:text-h1 text-white">
                Inicie uma parceria de sucesso hoje.
              </h2>
              <p className="font-body-lg text-body-lg text-white/70">
                Preencha o formulário e nossa equipe comercial entrará em contato em até 24 horas
                úteis com nossa tabela de atacado e condições especiais para o seu CNPJ.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-fixed">call</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-white/50 uppercase">Telefone / WhatsApp</p>
                    <p className="font-body-lg text-body-lg font-bold">+55 (31) 98765-4321</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-fixed">mail</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-white/50 uppercase">E-mail Comercial</p>
                    <p className="font-body-lg text-body-lg font-bold">parcerias@minasdoce.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-xl p-8 lg:p-10 text-on-surface">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                    Nome Completo
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                    E-mail Corporativo
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@empresa.com.br"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                    WhatsApp
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                    Razão Social / CNPJ
                  </label>
                  <input
                    name="company"
                    type="text"
                    required
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                    Cidade / UF
                  </label>
                  <input
                    name="city"
                    type="text"
                    required
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Onde você está?"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                    Interesse Principal
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  >
                    {INTERESTS.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                    Mensagem (Opcional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Conte-nos um pouco sobre o seu negócio..."
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-sm text-label-sm font-bold uppercase tracking-widest hover:bg-primary-container transition-all shadow-md inline-flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    Enviar pelo WhatsApp
                  </button>
                  <p className="text-center text-on-surface-variant mt-4 opacity-70" style={{ fontSize: '10px' }}>
                    Ao enviar, você concorda com nossa Política de Privacidade e termos de uso comercial.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
