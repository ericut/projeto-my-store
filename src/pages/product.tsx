import { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
//
import Header from '../components/Header/Header';
import { ContainerWrapper, ProductGrid } from '../styles/Product/ProductPage.styles';
import ProductImage from '../features/Product/ProductImage/ProductImage';
import ProductInfo from '../features/Product/ProductInfo/ProductInfo';
import ProductControls from '../features/Product/ProductControls/ProductControls';
import ProductData from '../data/Product.data';
import { IProductData } from '../interfaces/IProductData';
import { IShoppingCart } from '../interfaces/IShoppingCart';

const Product: NextPage = () => {
  const product = ProductData.find((product: IProductData) => product._id === '00001');

  const [productSelected, setProductSelected] = useState<IShoppingCart>({
    _id: product ? product?._id : '',
    name: product ? product?.name : '',
    color: '',
    size: '',
    payment: '',
    quantity: 0,
  });

  const handleSubmit = useCallback(() => {
    alert(
      `Produto selecionado: ${productSelected.name}, cor: ${productSelected.color}, tamanho: ${productSelected.size}, quantidade: ${productSelected.quantity}. Será pago em ${productSelected.payment}.`
    );
  }, [productSelected]);

  return (
    <ContainerWrapper>
      <Head>
        <title>Dona Moda</title>
      </Head>
      <ProductGrid>
        <Header style={{ gridArea: 'headerArea' }} />
        <ProductImage style={{ gridArea: 'imageArea' }} productData={product} />
        <ProductInfo style={{ gridArea: 'infoArea' }} productData={product} />
        <ProductControls
          style={{ gridArea: 'controlsArea' }}
          productData={product}
          productSelected={productSelected}
          handleChanger={setProductSelected}
          handleSubmit={handleSubmit}
        />
      </ProductGrid>
    </ContainerWrapper>
  );
};

export default Product;
