import type { NextPage } from 'next';
import Head from 'next/head';
//
import Header from '../components/Header/Header';
import { ContainerWrapper, ProductGrid } from '../styles/Product/ProductPage.styles';
import ProductImage from '../components/ProductImage/ProductImage';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import ProductControls from '../components/ProductControls/ProductControls';

const Product: NextPage = () => {
  return (
    <ContainerWrapper>
      <Head>
        <title>Dona Moda</title>
      </Head>
      <ProductGrid>
        <Header style={{ gridArea: 'headerArea' }} />
        <ProductImage style={{ gridArea: 'imageArea' }} />
        <ProductInfo style={{ gridArea: 'infoArea' }} />
        <ProductControls style={{ gridArea: 'controlsArea' }} />
      </ProductGrid>
    </ContainerWrapper>
  );
};

export default Product;
