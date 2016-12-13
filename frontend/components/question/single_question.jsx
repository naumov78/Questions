import React from 'react';
import { withRouter } from 'react-router';



class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { topic_id: 0, body: "" }
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.fetchSingleQuestion(parseInt(this.props.question_id));
  }

//this.props = Object {currentUser: Object, topic_id: "5", question_id: "2", body: undefined}
  render () {
    debugger
    return (
      <div>{this.props.body}</div>
    );
  }


}

export default SingleQuestion;
