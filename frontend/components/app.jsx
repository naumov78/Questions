import React from 'react';
import HeaderContainer from './header_container';
import MainContainer from './main/main_container';

const App =({ children }) => {
  return (
    <div>
      <HeaderContainer />
      <MainContainer />
      { children }
    </div>
  );
}


export default App;
