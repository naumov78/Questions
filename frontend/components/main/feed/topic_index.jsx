import React from 'react';
// import TopicIndex from './topic_index';
// import UserIndex from './user_index';


class TopicIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchTopics();
    // debugger
    this.props.fetchQuestions
  }

  render() {
    // debugger
    return (
       <div>TopicIndex</div>
     );

  }



}


export default TopicIndex;






// const TopicIndex = (props) => {
//   return (
//     <div></div>
//   );
// }
