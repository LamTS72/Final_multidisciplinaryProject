import './App.css';

// Thư viện router 
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import Homes from './pages/Homes/Homes';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Checkout from './pages/Checkout/Checkout';
import Menu from './pages/Menu/Menu';
import Payment from './pages/Payment/Payment';
import Search from './pages/Search/Search';

// Thư viện giúp chuyển hướng trang
import { createBrowserHistory} from 'history';
import HomeTemplate from './templates/HomeTemplates/HomeTemplate';
import UserTemplate from './templates/UserTemplates/UserTemplate';
import UserAccount from './pages/UserAccount/UserAccount';
export const history = createBrowserHistory();

  

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/home" component={Homes} />
        <HomeTemplate exact path="/detail/:postId" component={Detail} />
        <UserTemplate exact path="/login" component={Login} />
        <UserTemplate exact path="/register" component={Register} />
        <HomeTemplate exact path="/checkout/:id" component={Checkout}/>
        <HomeTemplate exact path="/menu" component={Menu} />
        <HomeTemplate exact path="/payment/:id" component={Payment} />
        <HomeTemplate exact path="/timkiem/:id" component={Search}/>
        <HomeTemplate exact path="/u" component={UserAccount}/>
        <HomeTemplate component={Homes} />
      </Switch>
    </Router>
  );
}

export default App;
