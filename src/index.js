import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'layout/Root';
import {observable, action} from 'mobx';

import {
  Component,
  Provider,
} from 'util/index';



var appState = observable({
  timer: 0
})


ReactDOM.render(
  <Root />,
  document.getElementById('app')
);
