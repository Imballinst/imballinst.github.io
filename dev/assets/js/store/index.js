import 'babel-polyfill';

// With React

import React from 'react';
import { render } from 'react-dom';

import Page from '../component/Page';

render(
  <Page />,
  document.getElementById('react-wrapper')
);
