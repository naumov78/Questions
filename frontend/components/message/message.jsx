import React from 'react';
import { Link, withRouter } from 'react-router';


class Message extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchMessage(parseInt(this.props.params[id]));
  }

  // renderAnswers() {
  //   return (
  //     <div className="answers-list">
  //       {this.props.answers.map(ans => {
  //         return <li key={ans.id}>{ans.body}</li>
  //       })}
  //     </div>
  //   );
  // }

  render() {
    return (
       <div>
         <div>
           <span>{this.props.message.title}</span>
         </div>
         <div>
           <span>{this.props.message.body}</span>
         </div>

       </div>
     );
  }

}

export default withRouter(Message);
