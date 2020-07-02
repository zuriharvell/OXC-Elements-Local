import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import * as serviceWorker from './serviceWorker';
import './index.css';
import '../node_modules/highlight.js/styles/ocean.css';
import { initializeIconLibrary } from './components';

initializeIconLibrary();

ReactDOM.render(<Docs />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
