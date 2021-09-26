import { IProductData } from '../interfaces/IProductData';

export const ProductData: IProductData[] = [
  {
    _id: '00001',
    name: 'Blusa em linho com Detalhe',
    score: 4,
    rates: 20,
    store: 'Lojas Renner',
    details:
      'Detalhes Tab Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim risus vel aliquet est at vitae in. Varius bibendum tristique sed mattis varius at neque, sed. Diam id et in volutpat cursus mattis nulla quis sollicitudin. Diam convallis sagittis amet, elementum.',
    trim: 'Caimento Tab Enim risus vel aliquet est at vitae in. Varius bibendum tristique sed mattis varius at neque, sed. Diam id et in volutpat cursus mattis nulla quis sollicitudin. Diam convallis sagittis amet, elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    care: 'Cuidados Tab Varius bibendum tristique sed mattis varius at neque, sed. Diam id et in volutpat cursus mattis nulla quis sollicitudin. Diam convallis sagittis amet, elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim risus vel aliquet est at vitae in. ',
    image: 'http://localhost:3000/products/product_image.png',
    colors: [
      { name: 'Areia', hex: '#F1E9E2' },
      { name: 'Preto', hex: '#191919' },
      { name: 'Cinza', hex: '#E0E0E0' },
      { name: 'Branco', hex: '#FFFFFF' },
    ],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    payment: ['1x R$ 129,90', '2x R$ 64,90'],
  },
];

export default ProductData;
