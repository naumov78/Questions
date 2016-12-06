import React from 'react';
import GreetingContainer from './greeting_container';

const App =({ children }) => {
  return (
    <div>
      <h2>App name</h2>

      { children }
    </div>
  );
}


export default App;


// <GreetingContainer />
