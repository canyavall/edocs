import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import store from './service/store'



//Routes
import Home from './components/Home';

//Others
import './index.css';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#ffffff',
        textColor: '#ffa31a'
    },
});

injectTapEventPlugin();
ReactDOM.render(
          <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store = {store}>
              <Router>
                <Switch>
                  <Route exact path="/" component={ Home } />
                </Switch>
              </Router>
            </Provider>
          </MuiThemeProvider>,
          document.getElementById('root')
);

registerServiceWorker();
