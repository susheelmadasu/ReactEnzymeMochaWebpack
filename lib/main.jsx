import React from 'react';
import {render} from 'react-dom';
import ExampleApplication from './index';

const appRoot = document.getElementById('base');

render(
  <ExampleApplication message='Hello Team' submessage='Good to See You ALL !!'/>,
  appRoot
);
