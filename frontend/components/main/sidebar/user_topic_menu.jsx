import React from 'react';


const UserTopicsMenu = (props) => {
  return (
    <div className="topic-menu">
      <ul>
        {props.currentUser.topics.map((topic, i) => {
          return (
            <a href="#">
              <li key={`${i}`}>{topic}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}

export default UserTopicsMenu;
