import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [,, light] = ["boots", "tent", "headlamp"];
console.log(light);

ReactDOM.render(
  <App authorized={true} />,
  document.getElementById('root')
);