import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import CssBaseline from "@material-ui/core/CssBaseline";
// import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
// import {createStore} from "redux";
// import reducers from './store'
// const store = createStore(reducers)
import store from './store'
import { createBrowserHistory } from "history";
import ResponsiveDrawer from './components/Drawer/ResponsiveDrawer';


const hist = createBrowserHistory();

ReactDOM.render(
  //<React.StrictMode>
    <Provider store= {store}>
      <Router history={hist}>
       {/* <CssBaseline />
        */}
        {/* <ResponsiveDrawer /> */}
        <App /> 
      </Router>
      
  </Provider>,
    
  
    //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
