import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  // direcionador para página de produto, somente para manter a organização das páginas/componentes
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      router.push('/product');
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>Dona Moda</title>
        <meta name="description" content="Dona Moda" />
      </Head>
      <main />
    </div>
  );
};

export default Home;
