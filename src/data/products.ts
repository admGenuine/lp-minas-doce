export type Category = 'Linha Cubo' | 'Linha Pastosa' | 'Linha Barra' | 'Linha Caixa'

export interface Product {
  id: number
  name: string
  description: string
  category: Category
  image: string
  waQuote: string
  waDetails: string
}

const WA = '5531987654321'
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`

export const products: Product[] = [
  {
    id: 1,
    name: 'Pé de Moleque',
    description: 'Clássico crocante feito com amendoins selecionados e caramelo no ponto perfeito.',
    category: 'Linha Cubo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdsuntVCa_4Ehq5YRFoU2C9CoDmcdvIBkVDFvgNhnDuFzDRit04SLtyPyPB8edhRvbKPQbxtl0tDLr8bY2SIwcpNGljZsBbDXfUHJiFcx-icNzApxyLsjq5xJT_E6lDvzjVtbPxWm9F7CIqcriPKPKu-oXo7pth9V6veQTRyw8gWHF-Yq-NobvUT5cG8dDSjpbH-xw98bJxz-nJWl7-VXQPSBXDCDmJlynB6t46Z1L5iOJUr_MNOcNNPlKBBETprKUuUE4iUSZ-Y0',
    waQuote: wa('Olá, tenho interesse em orçar Pé de Moleque para meu negócio.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Pé de Moleque.'),
  },
  {
    id: 2,
    name: 'Doce de Leite Tablete',
    description: 'A tradicional cremosidade mineira em formato prático de corte.',
    category: 'Linha Cubo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvutwb5aqsDZebFMeEqWwk_YbVNLUWshV74JpPVkRnj7zM_0grhh811CzwmaqU62LOeKmQz5YFhe1tj6ikHvfjtmsAb1xb7ZrcSjVCfM13qW-Dt_KxKK5zG-SregYrapIRLd4Mxj_6NPb8rAKy2uhh7nendOGZNppqUikqM4egnR3pUsjFd8AHAeqowYMNhkhh9zdpJGWpJALmV0b1NsCeuPi_W-O53D9b0YWzTqdB3R7e7M1DTPG-Mk9o1u6Xji1aRvKEgiNAgcM',
    waQuote: wa('Olá, tenho interesse em orçar Doce de Leite Tablete.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Doce de Leite Tablete.'),
  },
  {
    id: 3,
    name: 'Cocada Branca',
    description: 'Cocada artesanal de textura macia e sabor intenso de coco fresco.',
    category: 'Linha Cubo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj6U2xo9J_AivRDQ_cdtP8YLwU_mVLHqoY-Ps9j7ZJ_HeIvGXM2PkflrEklId1KToZTUzizTy6MnxqlbfEAqERVfDWyR3f38Z7DJ2oQhkL9120mVazZCtgy4Zh4lbbxzjJt8DJv5xtRtsfirFBq7n9-Dcv81KJrTVOHqg2m7MHMOpZwoYT63nCE1_1GZanVrMy4_5mIhrifgQpLJnIPmkIjj4eaVBccTjzvuCGk5Xy9Ds9hlwp689UhDScAoGafAidLhX0TKrZSyg',
    waQuote: wa('Olá, tenho interesse em orçar Cocada Branca.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Cocada Branca.'),
  },
  {
    id: 4,
    name: 'Cocada Queimada',
    description: 'A versão levemente tostada da nossa cocada, com notas caramelizadas.',
    category: 'Linha Cubo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHFnHGk_Cw7LasKAd5H67OWRqQQg9vaXK0NeUjQDWL-Uzhs7hqIyua0qQ19W2TeW_3w4a6xq_l52SWQ_Z_mDtTkuU03SdUXnjp_CjzaafrF0yY33yluXp-hOTpgIQiFsy-2MP7icFWLy1k5bfQS4qPHIz4DgZ5bUEKksiDuMZ9_DVm01Mt77HSSQuK3Au9BBiY-RljWH9cvViW-qVOSKp3WlEMW_DxESvoeZUut9F_JsUMh_KCUWpmitgXZnNjj8WeBz39V4KjqUI',
    waQuote: wa('Olá, tenho interesse em orçar Cocada Queimada.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Cocada Queimada.'),
  },
  {
    id: 5,
    name: 'Doce de Leite Tradicional',
    description: 'Receita centenária mineira com redução lenta, garantindo cremosidade incomparável.',
    category: 'Linha Pastosa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm_1HquZy4YwECDOj1sFD6E5sVj0qhFWil07tIOb57Ad9JrYLjLowbyUj0HSnKJvWoM8Ru9AZcvo3mSQZt0r5-Dv9dYjogywnhZUkkALvF1IlPXOtmB3dMwl8OFQoiFmkRO5L0ZsbVAgRMw8QMM9MS3-jynqqG0V49eg4_Cs1ZDNlZyOGp_oXkpA0e3Ndb1of5nQZrxJNwRjFYrQC8j-jJkgujrMELTZMlfx1QmGmuoFgxGd6t1b1HV_GgiJGsjED9y7IJlYhh84o',
    waQuote: wa('Olá, tenho interesse em orçar Doce de Leite Tradicional.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Doce de Leite Tradicional.'),
  },
  {
    id: 6,
    name: 'Goiabada Cascão',
    description: 'Produzida com goiabas selecionadas, preservando pedaços da fruta para textura rústica.',
    category: 'Linha Pastosa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHspQPQYhrnbAWT_ctSHlJBYK9pca-DUeFUejZIDqmqManZc7AJ-WeDyzqZ05OUEi5z8-15cDPS3gZcqzXugz7kYvjgQijfTAncJVERZQU4GowMR7dvW4olevoZdhg0WLnXd0ET0Q_ksWw5yqCyha-qyhhw5irM3ncsIxyxdTsrqT0LBvfLqPsaurtDFo-SqoRnkJoTJqHTdyE_SOQuQ1hw6_EkFNEOonj7QblzhKn607f2tLgPHYlSVyxqpbe0lfPShl-JK8xr6g',
    waQuote: wa('Olá, tenho interesse em orçar Goiabada Cascão.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Goiabada Cascão.'),
  },
  {
    id: 7,
    name: 'Ambrosia Tradicional',
    description: 'O doce dos deuses, com leite fresco, ovos e um toque de canela e cravo.',
    category: 'Linha Pastosa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnYEDz7EGdsqOSad_IPQ4HXcWraRzvnc3sFi-EbHqMqwVwpkbDlboC_fOl1qQ5vpDpWa043smfkMrbWO5_zkVPwielpdwzRFw46Yydo4Yb77v7IflQdUCZysQ9K-da-T5oiVyq1hsS71GkUQZQUY2fgOl-sZvxAuL-xLDgLCnozXA27DL0MqzYJ0_ipqbLUyuppw9JH8M0PEwI9xUB5T86-PqYJWVLJgkffep4iSITaEZsaulcdJ6ffFEZcw6sPvhbJHYvi4RdjNI',
    waQuote: wa('Olá, tenho interesse em orçar Ambrosia Tradicional.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Ambrosia Tradicional.'),
  },
  {
    id: 8,
    name: 'Doce de Leite em Barra',
    description: 'Barra de 500g de puro doce de leite mineiro, ideal para corte e sobremesas.',
    category: 'Linha Barra',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXRSLPKHU9vOifrHKwaSIzGngp0vnYIcKq--S3WKPQMLR8Ncv97JlbTcUzubsqQaADClviiH3OSO81FjKG_xrCr_rAkL-Cp3IQ4hdOQW87pdR4zaUPYm5pOePc4fodJqvL7CokVfBl2nMxBBwNewPiAda0NZYJq5mz-EOjuP-Excrcw4IWjL12Hb40K292crTduohnLk8-t40scH-MVY5JB2wrc0iF8MHOyBRpkU-RrTQW30kWgjo7Ct8sAsB0wBX2nUgmFXPvIP8',
    waQuote: wa('Olá, tenho interesse em orçar Doce de Leite em Barra.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Doce de Leite em Barra.'),
  },
  {
    id: 9,
    name: 'Bananinha',
    description: 'Doce de banana concentrado em barra, sabor intenso e textura macia.',
    category: 'Linha Barra',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCubGyAdLLb2XYiFQ6CzyNKjpHkpOU-g_PWaOLFoOeipCug1bid6880tuvEXIjhiGp7ej1APs0o5RUE5KIDSWcVfpzW121WAMRX-KqSJqJGjG_N-P_YrlWOwbJ4ukqudLV60XL6Zk-VsecavBZ13Qi_HoDTbsd6cUbOjYFHeIzbYwygAJrHGPc-kE7L8vvWtjEP6hr1oorBHMkRnpB5plzqViAz7Xq0uC4-al05RTJQQakijiQvyyZ3tdWtjyw36mocbb1yJLFJu38',
    waQuote: wa('Olá, tenho interesse em orçar Bananinha.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Bananinha.'),
  },
  {
    id: 10,
    name: 'Goiabada em Barra',
    description: 'Bloco firme de goiabada cascão, perfeito para fatiamento e receitas.',
    category: 'Linha Barra',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHspQPQYhrnbAWT_ctSHlJBYK9pca-DUeFUejZIDqmqManZc7AJ-WeDyzqZ05OUEi5z8-15cDPS3gZcqzXugz7kYvjgQijfTAncJVERZQU4GowMR7dvW4olevoZdhg0WLnXd0ET0Q_ksWw5yqCyha-qyhhw5irM3ncsIxyxdTsrqT0LBvfLqPsaurtDFo-SqoRnkJoTJqHTdyE_SOQuQ1hw6_EkFNEOonj7QblzhKn607f2tLgPHYlSVyxqpbe0lfPShl-JK8xr6g',
    waQuote: wa('Olá, tenho interesse em orçar Goiabada em Barra.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Goiabada em Barra.'),
  },
  {
    id: 11,
    name: 'Caixa Presente Sortida',
    description: 'Mix de doces mineiros em embalagem presenteável, ideal para datas comemorativas.',
    category: 'Linha Caixa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm_1HquZy4YwECDOj1sFD6E5sVj0qhFWil07tIOb57Ad9JrYLjLowbyUj0HSnKJvWoM8Ru9AZcvo3mSQZt0r5-Dv9dYjogywnhZUkkALvF1IlPXOtmB3dMwl8OFQoiFmkRO5L0ZsbVAgRMw8QMM9MS3-jynqqG0V49eg4_Cs1ZDNlZyOGp_oXkpA0e3Ndb1of5nQZrxJNwRjFYrQC8j-jJkgujrMELTZMlfx1QmGmuoFgxGd6t1b1HV_GgiJGsjED9y7IJlYhh84o',
    waQuote: wa('Olá, tenho interesse em orçar a Caixa Presente Sortida.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Caixa Presente Sortida.'),
  },
  {
    id: 12,
    name: 'Display de Paçoquinha',
    description: 'Expositor de balcão com 48 unidades de paçoquinha, pronto para o PDV.',
    category: 'Linha Caixa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdsuntVCa_4Ehq5YRFoU2C9CoDmcdvIBkVDFvgNhnDuFzDRit04SLtyPyPB8edhRvbKPQbxtl0tDLr8bY2SIwcpNGljZsBbDXfUHJiFcx-icNzApxyLsjq5xJT_E6lDvzjVtbPxWm9F7CIqcriPKPKu-oXo7pth9V6veQTRyw8gWHF-Yq-NobvUT5cG8dDSjpbH-xw98bJxz-nJWl7-VXQPSBXDCDmJlynB6t46Z1L5iOJUr_MNOcNNPlKBBETprKUuUE4iUSZ-Y0',
    waQuote: wa('Olá, tenho interesse em orçar o Display de Paçoquinha.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Display de Paçoquinha.'),
  },
  {
    id: 13,
    name: 'Caixa de Canudos',
    description: 'Canudos recheados com doce de leite em caixa para revenda, 30 unidades.',
    category: 'Linha Caixa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj6U2xo9J_AivRDQ_cdtP8YLwU_mVLHqoY-Ps9j7ZJ_HeIvGXM2PkflrEklId1KToZTUzizTy6MnxqlbfEAqERVfDWyR3f38Z7DJ2oQhkL9120mVazZCtgy4Zh4lbbxzjJt8DJv5xtRtsfirFBq7n9-Dcv81KJrTVOHqg2m7MHMOpZwoYT63nCE1_1GZanVrMy4_5mIhrifgQpLJnIPmkIjj4eaVBccTjzvuCGk5Xy9Ds9hlwp689UhDScAoGafAidLhX0TKrZSyg',
    waQuote: wa('Olá, tenho interesse em orçar a Caixa de Canudos.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre a Caixa de Canudos.'),
  },
  {
    id: 14,
    name: 'Mix de Doces Caseiros',
    description: 'Variedade de doces mineiros tradicionais em embalagem de atacado para mercados.',
    category: 'Linha Caixa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHFnHGk_Cw7LasKAd5H67OWRqQQg9vaXK0NeUjQDWL-Uzhs7hqIyua0qQ19W2TeW_3w4a6xq_l52SWQ_Z_mDtTkuU03SdUXnjp_CjzaafrF0yY33yluXp-hOTpgIQiFsy-2MP7icFWLy1k5bfQS4qPHIz4DgZ5bUEKksiDuMZ9_DVm01Mt77HSSQuK3Au9BBiY-RljWH9cvViW-qVOSKp3WlEMW_DxESvoeZUut9F_JsUMh_KCUWpmitgXZnNjj8WeBz39V4KjqUI',
    waQuote: wa('Olá, tenho interesse em orçar o Mix de Doces Caseiros.'),
    waDetails: wa('Olá, gostaria de mais detalhes sobre o Mix de Doces Caseiros.'),
  },
]

export const CATEGORIES: Category[] = ['Linha Cubo', 'Linha Pastosa', 'Linha Barra', 'Linha Caixa']

export const categoryBadge: Record<Category, string> = {
  'Linha Cubo': 'bg-tertiary text-on-tertiary',
  'Linha Pastosa': 'bg-secondary text-on-secondary',
  'Linha Barra': 'bg-primary text-on-primary',
  'Linha Caixa': 'bg-primary-fixed text-on-primary-fixed',
}
