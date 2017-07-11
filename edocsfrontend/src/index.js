import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter as  Router, Route, Switch, Redirect  } from 'react-router-dom';
import store from './service/store'

//Routes
import Home from './routes/Home';
import Faq from './routes/Faq';
import Privacy from './routes/Privacy';
import Login from './routes/Login';
import Inbox from './routes/Inbox'
import Archive from './routes/Archive'

//actions
import { loginCurrentUser } from './actions/currentuser';

//utils
import './index.css';


// Check localstorage to get the data from the user
function getToken() {
  const StorageCurrentUser = {
    token: localStorage.getItem('userToken'),
    id: localStorage.getItem('userId'),
  }
  const action = loginCurrentUser(StorageCurrentUser);
  store.dispatch(action);
}
getToken();

//Check user is logged
function isLoggedIn() {
  if (store.getState().currentuser.token !== null) return true;
  return false;
}

//Set muitheme
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#ffffff',
        textColor: '#EF6C00'
    },
});


injectTapEventPlugin();
ReactDOM.render(
          <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store = {store}>
              <Router>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/faq" component={ Faq } />
                  <Route exact path="/privacy" component={ Privacy } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/inbox" render={() => (isLoggedIn() ? (<Inbox />) : (<Redirect to="/login"/>))}/>
                  <Route exact path="/archive" render={() => (isLoggedIn() ? (<Archive />) : (<Redirect to="/login"/>))}/>
                </Switch>
              </Router>
            </Provider>
          </MuiThemeProvider>,
          document.getElementById('root')
);

registerServiceWorker();
