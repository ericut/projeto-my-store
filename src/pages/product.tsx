import type { NextPage } from 'next';
import Head from 'next/head';
//
import Header from '../components/Header/Header';
import { ContainerWrapper, ProductGrid } from '../styles/Product/ProductPage.styles';
import ProductImage from '../components/ProductImage/ProductImage';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import ProductControls from '../components/ProductControls/ProductControls';
import ProductData from '../data/Product.data';
import { IProductData } from '../interfaces/IProductData';

const Product: NextPage = () => {
  const product = ProductData.find((product: IProductData) => product._id === '00001');

  return (
    <ContainerWrapper>
      <Head>
        <title>Dona Moda</title>
      </Head>
      <ProductGrid>
        <Header style={{ gridArea: 'headerArea' }} />
        <ProductImage style={{ gridArea: 'imageArea' }} productData={product} />
        <ProductInfo style={{ gridArea: 'infoArea' }} productData={product} />
        <ProductControls style={{ gridArea: 'controlsArea' }} productData={product} />
      </ProductGrid>
    </ContainerWrapper>
  );
};

export default Product;
