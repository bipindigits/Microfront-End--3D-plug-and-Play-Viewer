import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

document.addEventListener('touchstart', function(){}, {passive: false})
ReactDOM.render(<App />, document.getElementById('root'));
document.addEventListener('touchstart', function(){}, {passive: false})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();