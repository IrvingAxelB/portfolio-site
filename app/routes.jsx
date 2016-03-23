import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';

import about from './components/about.jsx'
import contact from './components/contact.jsx'
import home from './components/home.jsx'
import main from './components/main.jsx'

export default function(){
  return (
    <Route path="/" component={main}>
      <IndexRoute component={home}/>
      <Route path="/about" component={about}/>
      <Route path="/contact" component={contact}/>
    </Route>
    );
}
