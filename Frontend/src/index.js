import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <header>
      {`
.______  .______  ._____.___ ._______  ._______ .___    ._______.________     
:_ _   \ :      \ :         |: .___  \ :_.  ___\|   |   : .____/|    ___/     
|   |   ||   .   ||   \  /  || :   |  ||  : |/\ |   |   | : _/\ |___    \     
| . |   ||   :   ||   |\/   ||     :  ||    /  \|   |/\ |   /  \|       /     
|. ____/ |___|   ||___| |   | \_. ___/ |. _____/|   /  \|_.: __/|__:___/      
 :/          |___|      |___|   :/      :/      |______/   :/      :          
 :                              :       :                                     
      `}
    </header>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
