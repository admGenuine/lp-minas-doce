export type Category = 'Linha Cubo' | 'Linha Caixa'

export interface Product {
  id: number
  name: string
  description: string
  category: Category
  image: string
  waQuote: string
  waDetails: string
}

const WA = '5534996511781'
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`

export const products: Product[] = [
  {
    id: 1,
    name: 'Pé de Moleque',
    description: 'Clássico crocante feito com amendoins selecionados e caramelo no ponto perfeito.',
    category: 'Linha Cubo',
    image: '/cubo-pe-de-moleque.png',
    waQuote: wa('Olá, tenho interesse em orçar Pé de Moleque para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Pé de Moleque.'),
  },
  {
    id: 2,
    name: 'Doce de Leite Cubo',
    description: 'A tradicional cremosidade mineira em formato prático de corte.',
    category: 'Linha Cubo',
    image: '/cubo-doce-de-leite.png',
    waQuote: wa('Olá, tenho interesse em orçar Doce de Leite Cubo para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Doce de Leite Cubo.'),
  },
  {
    id: 3,
    name: 'Cocada Branca',
    description: 'Cocada artesanal de textura macia e sabor intenso de coco fresco.',
    category: 'Linha Cubo',
    image: '/cubo-cocada-branca.png',
    waQuote: wa('Olá, tenho interesse em orçar Cocada Branca para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Cocada Branca.'),
  },
  {
    id: 4,
    name: 'Cocada Morena',
    description: 'A versão levemente tostada da nossa cocada, com notas caramelizadas.',
    category: 'Linha Cubo',
    image: '/cubo-cocada-morena.png',
    waQuote: wa('Olá, tenho interesse em orçar Cocada Morena para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Cocada Morena.'),
  },
  {
    id: 5,
    name: 'Caixa de Cocada Morena',
    description: 'Caixa com cocadas morenas artesanais, ideal para revenda e presente.',
    category: 'Linha Caixa',
    image: '/caixa-cocada-morena.png',
    waQuote: wa('Olá, tenho interesse em orçar Caixa de Cocada Morena para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Caixa de Cocada Morena.'),
  },
]

export const CATEGORIES: Category[] = ['Linha Cubo', 'Linha Caixa']

export const categoryBadge: Record<Category, string> = {
  'Linha Cubo': 'bg-tertiary text-on-tertiary',
  'Linha Caixa': 'bg-primary-fixed text-on-primary-fixed',
}
