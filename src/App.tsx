import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components';

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default hot(App);
