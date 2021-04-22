import { ReactElement } from 'react';
import Layout from '../src/components/sections/layout';
import Nav from '../src/components/sections/nav';
import Header from '../src/components/sections/header';
import Shortener from '../src/components/sections/shortener';
import Statistics from '../src/components/sections/statistics';
import Message from '../src/components/sections/message';
import Footer from '../src/components/sections/footer';

function Home(): ReactElement {
  return (
    <Layout>
      <Nav />
      <Header />
      <Shortener />
      <Statistics />
      <Message />
      <Footer />
    </Layout>
  );
}

export default Home;
