import React from 'react';
import ReactDOM from 'react-dom';
import Component from './components/component.js';

window.onload = () => {
  ReactDOM.render(
    <Component />,
    document.querySelector('#app')
  );
};

