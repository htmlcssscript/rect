import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';


//按需更新
function tick() {
  ReactDOM.render(
    <Welcome name="frank"/>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);