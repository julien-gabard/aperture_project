import Banner from 'components/Banner';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop';
import Modal from 'containers/Modal';
import Navbar from 'containers/Navbar';
import Pages from 'containers/Pages';
import { useWindowSize } from 'hooks/useWindowSize';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './app.scss';

// == Component
const App = ({ fetchArticles }) => {
  const { windowWidthSize } = useWindowSize();

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles])

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

App.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
};

export default App;
