import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Modal from 'components/Modal';
import Navbar from 'components/Navbar';
import Pages from 'components/Pages';
import ScrollToTop from 'components/ScrollToTop';
import { useWindowSize } from 'hooks/useWindowSize';
import './app.scss';

// == Component
const App = () => {
  const { windowWidthSize } = useWindowSize();

  return (
    <div className="app">
      <ScrollToTop />
      <header className="app-header">
        {windowWidthSize > 768 && <Banner />}
        <Navbar />
      </header>
      <main className="app-main">
        <Modal />
        <Pages />
      </main>
      {windowWidthSize > 750 && <Footer />}
    </div>
  );
}

export default App;
