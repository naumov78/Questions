import React from 'react';
import { withRouter } from 'react-router';


// this.props.author_id

class UserTopicsMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="topic-menu">
          <ul>
            {this.props.currentUser.topics.map((topic, i) => {
              return (
                <a href={`/topics/${i}`}>
                  <li key={`${i}`}>{topic}</li>
                </a>
              );
            })}
          </ul>
        </div>
      );
  }


}


export default UserTopicsMenu;













// const UserTopicsMenu = (props) => {
//   // debugger
//   return (
//     <div className="topic-menu">
//       <ul>
//         {props.currentUser.topics.map((topic, i) => {
//           return (
//             <a href={`/topics/${i}`}>
//               <li key={`${i}`}>{topic}</li>
//             </a>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
