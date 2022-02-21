import Layout from '../components/Layout';
import Head from 'next/head';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Edvora App</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout />;
    </Fragment>
  );
};

export default Home;
