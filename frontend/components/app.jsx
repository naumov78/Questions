import React from 'react';
// import GreetingContainer from './greeting_container';
import HeaderContainer from './header_container';
import MainContainer from './main/main_container';

const App =({ children }) => {

  // window.onclick = function(e) {
  //   // debugger
	// 	if (!e.target.matches('.drop-btn')) {
	// 		const dropdowns = document.getElementById("myDropdown");
  //     // debugger
	// 		let i;
	// 		for (i = 0; i < dropdowns.length; i++ ) {
	// 			const openDropdown = dropdowns[1];
	// 			if (openDropdown.classList.contains('show')) {
	// 				openDropdown.classList.remove('show');
	// 			}
	// 		}
	// 	}
	// }


  return (
    <div>
      <HeaderContainer />
      { children }
    </div>
  );
}


export default App;

// <MainContainer />
