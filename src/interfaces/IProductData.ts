export interface IProductData {
  _id: string;
  name: string;
  score: number;
  rates: number;
  store: string;
  details: string;
  trim: string;
  care: string;
  image: string;
  colors: IColors[];
  sizes: string[];
  payment: string[];
}

interface IColors {
  name: string;
  hex: string;
}
