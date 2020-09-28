import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/Firebase/App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
 
serviceWorker.unregister();