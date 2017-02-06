import React from 'react';
import HeaderContainer from './header_container';
import MainContainer from './main/main_container';
import Footer from './footer';

const App =({ children }) => {
  return (
    <div>
      <HeaderContainer />
      <MainContainer />
      { children }
      <Footer />
    </div>
  );
}


export default App;
