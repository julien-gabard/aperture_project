import { Route, Switch } from 'react-router-dom';
import ArticlesList from './ArticlesList';
import Article from './Article';
import ConfidentialityCondition from './ConfidentialityCondition';
import Error404 from './Error404';
import LegalNotice from './LegalNotice';
import LoginOrRegister from './LoginOrRegister';

const Pages = () => (
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
      <LoginOrRegister register={false} />
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

export default Pages;