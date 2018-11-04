import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './pages/demo/Life';
import * as serviceWorker from './serviceWorker';
import Admin from './admin'
import Route from './router'
// import Route from'./pages/route_demo/route3/route'

ReactDOM.render(<Route/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
