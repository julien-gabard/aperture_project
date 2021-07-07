import Article from 'containers/Pages/Article';
import ArticlesList from 'containers/Pages/ArticlesList';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import ConfidentialityCondition from './ConfidentialityCondition';
import Error404 from './Error404';
import LegalNotice from './LegalNotice';
import LoginOrRegister from './LoginOrRegister';

const Pages = ({ isLogged }) => (
  <Switch>
    <Route path="/" exact>
      <ArticlesList />
    </Route>
    <Route path="/article/:id" exact>
      <Article />
    </Route>
    <Route path="/registration" exact>
      <LoginOrRegister register={true} />
    </Route>
    <Route path="/login" exact>
      {isLogged ? <Redirect to="/" /> : <LoginOrRegister register={false} />}
    </Route>
    <Route path="/Confidentiality_conditions" exact>
      <ConfidentialityCondition />
    </Route>
    <Route path="/Legal_notices" exact>
      <LegalNotice />
    </Route>
    <Route>
      <Error404 />
    </Route>
  </Switch>
);

Pages.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Pages;