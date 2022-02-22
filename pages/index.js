import Layout from '../components/Layout';
import Head from 'next/head';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <>
      <Head>
        <title>Edvora App</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout />
      <Menu />
    </>
  );
};

export default Home;
