import React from 'react';
import GreetingContainer from './greeting_container';
import HeaderContainer from './header_container';

const App =({ children }) => {
  return (
    <div>
      <HeaderContainer />
      { children }
    </div>
  );
}


export default App;

// <GreetingContainer />
