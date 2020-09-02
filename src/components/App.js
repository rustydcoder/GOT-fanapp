import React from 'react';
import '../scss/main.scss';
import Logo from '../containers/Logo';
import Main from '../containers/Main';
import FooterNav from '../containers/FooterNav';


function App() {
  return (
    <div className="wrapper text-center">
      <Logo />
      <Main />
      <FooterNav />
    </div>
  );
}

export default App;
