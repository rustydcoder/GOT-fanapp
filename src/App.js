import React from 'react';
import './scss/main.scss';
import Logo from './containers/Logo';
import Home from './containers/Home';
import FooterNav from './containers/FooterNav';


function App() {
  return (
    <div className="wrapper text-center">
      <Logo />
      <Home />
      <FooterNav />
    </div>
  );
}

export default App;
