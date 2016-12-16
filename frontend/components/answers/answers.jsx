import React from 'react';
import { Link, withRouter } from 'react-router';


class Answers extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAnswers(parseInt(this.props.topic_id));
  }

  renderAnswers() {
    return (
      <div className="answers-list">
        {this.props.answers.map(ans => {
          return <li key={ans.id}>{ans.body}</li>
        })}
      </div>
    );
  }

  render() {
    return (
       <div>{this.renderAnswers()}</div>
     );
  }

}

export default withRouter(Answers);
