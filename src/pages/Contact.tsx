import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA_BASE = 'https://wa.me/5531987654321'

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const SUBJECTS = [
  'Dúvida sobre produtos',
  'Solicitar orçamento',
  'Informações de parceria',
  'Suporte a parceiro',
  'Outro assunto',
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: SUBJECTS[0],
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
      `Olá! Entrei em contato pelo site da Minas Doce.`,
      '',
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.phone}`,
      `Assunto: ${form.subject}`,
      '',
      `Mensagem: ${form.message}`,
    ]
    window.open(`${WA_BASE}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank')
  }

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <section className="py-section-padding px-gutter max-w-container-max mx-auto">
        <span className="inline-block font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">
          Fale Conosco
        </span>
        <h1 className="font-h1 text-h1-mobile md:text-h2 text-on-surface mb-4">
          Entre em Contato
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Estamos prontos para atender você. Escolha o canal mais conveniente ou preencha o formulário abaixo.
        </p>
      </section>

      {/* ── Info Cards + Form ─────────────────────────────────────────────────── */}
      <section className="pb-section-padding px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Info */}
          <div className="lg:w-72 shrink-0 space-y-4">
            {[
              {
                icon: 'call',
                label: 'Telefone / WhatsApp',
                value: '+55 (31) 98765-4321',
                href: `${WA_BASE}?text=Ol%C3%A1%2C+gostaria+de+falar+com+a+Minas+Doce.`,
              },
              {
                icon: 'mail',
                label: 'E-mail',
                value: 'sac@minasdoce.com.br',
                href: 'mailto:sac@minasdoce.com.br',
              },
              {
                icon: 'location_on',
                label: 'Endereço',
                value: 'Av. das Palmeiras, 1500 — Distrito Industrial\nBelo Horizonte — MG',
                href: undefined,
              },
              {
                icon: 'schedule',
                label: 'Horário de Atendimento',
                value: 'Seg–Sex: 8h às 18h\nSáb: 8h às 12h',
                href: undefined,
              },
            ].map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary" style={{ fontSize: '20px' }}>
                    {icon}
                  </span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors whitespace-pre-line"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-body-md text-body-md text-on-surface whitespace-pre-line">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="flex-1 bg-surface-container-lowest border border-surface-variant rounded-xl p-8 lg:p-10">
            <h2 className="font-h3 text-h3 text-on-surface mb-8">Envie sua mensagem</h2>
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
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                  Telefone
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                  Assunto
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="font-label-sm text-label-sm font-bold uppercase text-on-surface-variant block">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
                />
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-sm text-label-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Enviar pelo WhatsApp
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
