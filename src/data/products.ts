export type Category = 'Linha Cubo' | 'Linha Caixa' | 'Linha Barra' | 'Linha Pastosa'

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
    name: 'Pé de Moleque em Cubo',
    description: 'Clássico crocante feito com amendoins selecionados e caramelo no ponto perfeito.',
    category: 'Linha Cubo',
    image: '/cubo-pe-de-moleque.png',
    waQuote: wa('Olá, tenho interesse em orçar Pé de Moleque em Cubo para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Pé de Moleque em Cubo.'),
  },
  {
    id: 2,
    name: 'Doce de Leite em Cubo',
    description: 'A tradicional cremosidade mineira em formato prático de corte.',
    category: 'Linha Cubo',
    image: '/cubo-doce-de-leite.png',
    waQuote: wa('Olá, tenho interesse em orçar Doce de Leite em Cubo para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Doce de Leite em Cubo.'),
  },
  {
    id: 3,
    name: 'Cocada Branca em Cubo',
    description: 'Cocada artesanal de textura macia e sabor intenso de coco fresco.',
    category: 'Linha Cubo',
    image: '/cubo-cocada-branca.png',
    waQuote: wa('Olá, tenho interesse em orçar Cocada Branca em Cubo para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Cocada Branca em Cubo.'),
  },
  {
    id: 4,
    name: 'Cocada Morena em Cubo',
    description: 'A versão levemente tostada da nossa cocada, com notas caramelizadas.',
    category: 'Linha Cubo',
    image: '/cubo-cocada-morena.png',
    waQuote: wa('Olá, tenho interesse em orçar Cocada Morena em Cubo para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Cocada Morena em Cubo.'),
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
  {
    id: 6,
    name: 'Cocada Morena em Barra',
    description: 'Cocada morena artesanal em barra de 500g — doce de leite com coco, textura crocante e sabor caramelizado.',
    category: 'Linha Barra',
    image: '/barra-cocada-morena.jpg',
    waQuote: wa('Olá, tenho interesse em orçar Cocada Morena em Barra para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Cocada Morena em Barra.'),
  },
  {
    id: 7,
    name: 'Cocada Branca em Barra',
    description: 'Cocada branca artesanal em barra de 500g — doce de leite com coco, macia e de sabor intenso.',
    category: 'Linha Barra',
    image: '/barra-cocada-branca.jpg',
    waQuote: wa('Olá, tenho interesse em orçar Cocada Branca em Barra para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Cocada Branca em Barra.'),
  },
  {
    id: 8,
    name: 'Doce de Leite em Barra',
    description: 'Doce de leite mineiro em barra de 500g — cremoso, artesanal e no ponto perfeito.',
    category: 'Linha Barra',
    image: '/barra-doce-de-leite.jpg',
    waQuote: wa('Olá, tenho interesse em orçar Doce de Leite em Barra para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Doce de Leite em Barra.'),
  },
  {
    id: 9,
    name: 'Cocada Branca Cremosa',
    description: 'Cocada branca cremosa em pote de 350g — doce de leite com coco, textura pastosa e sabor suave.',
    category: 'Linha Pastosa',
    image: '/pastosa-cocada-branca.jpg',
    waQuote: wa('Olá, tenho interesse em orçar Cocada Branca Cremosa para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Cocada Branca Cremosa.'),
  },
  {
    id: 10,
    name: 'Cocada Morena Cremosa',
    description: 'Cocada morena cremosa em pote de 350g — doce de leite com coco, textura pastosa e sabor caramelizado.',
    category: 'Linha Pastosa',
    image: '/pastosa-cocada-morena.jpg',
    waQuote: wa('Olá, tenho interesse em orçar Cocada Morena Cremosa para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Cocada Morena Cremosa.'),
  },
  {
    id: 11,
    name: 'Doce de Leite Cremoso',
    description: 'Doce de leite cremoso em pote de 350g — artesanal, consistência pastosa e sabor mineiro autêntico.',
    category: 'Linha Pastosa',
    image: '/pastosa-doce-de-leite.jpg',
    waQuote: wa('Olá, tenho interesse em orçar Doce de Leite Cremoso para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Doce de Leite Cremoso.'),
  },
  {
    id: 12,
    name: 'Caixa de Cocada Branca em Cubo',
    description: 'Caixa com 1kg de cocada branca em pedaço — doce de leite com coco, ideal para revenda.',
    category: 'Linha Caixa',
    image: '/cubo-caixa-cocada-branca.jpg',
    waQuote: wa('Olá, tenho interesse em orçar Caixa de Cocada Branca em Cubo para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Caixa de Cocada Branca em Cubo.'),
  },
  {
    id: 13,
    name: 'Caixa de Doce de Leite em Cubo',
    description: 'Caixa com 1kg de doce de leite em pedaço — tradicional mineiro, perfeito para revenda.',
    category: 'Linha Caixa',
    image: '/cubo-caixa-doce-de-leite.jpg',
    waQuote: wa('Olá, tenho interesse em orçar Caixa de Doce de Leite em Cubo para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Caixa de Doce de Leite em Cubo.'),
  },
  {
    id: 14,
    name: 'Caixa de Pé de Moleque em Cubo',
    description: 'Caixa com 1kg de pé de moleque em pedaço — crocante, artesanal e ideal para revenda.',
    category: 'Linha Caixa',
    image: '/cubo-caixa-pe-de-moleque.jpg',
    waQuote: wa('Olá, tenho interesse em orçar Caixa de Pé de Moleque em Cubo para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Caixa de Pé de Moleque em Cubo.'),
  },
]

export const CATEGORIES: Category[] = ['Linha Cubo', 'Linha Caixa', 'Linha Barra', 'Linha Pastosa']

export const categoryBadge: Record<Category, string> = {
  'Linha Cubo': 'bg-tertiary text-on-tertiary',
  'Linha Caixa': 'bg-primary-fixed text-on-primary-fixed',
  'Linha Barra': 'bg-secondary text-on-secondary',
  'Linha Pastosa': 'bg-tertiary-container text-on-tertiary-container',
}
