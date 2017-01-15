import React from 'react';
import { withRouter, Link } from 'react-router';


class TopicIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderQuestions = this.renderQuestions.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleTopic(parseInt(this.props.params.topic_id));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.topic_id !== this.props.params.topic_id) {
      this.props.fetchSingleTopic(newProps.params.topic_id);
    }
  }

  renderQuestions() {
    const topic_id = parseInt(this.props.params.topic_id);
    return (
      <div className="topic-questions">
        <ul>
          {this.props.questions.map(q => {
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const date = new Date(q.created_at);
            return <li key={q.id}>
              <div className="single-q-list">
                <div className="q-body">
                  <Link to={`/topics/${topic_id}/questions/${q.id}`}>{q.body}</Link>
                </div>
                <div className="q-date">
                  <p>Written {monthNames[date.getMonth()]} {date.getDate()}</p>
                </div>
              </div>
            </li>
          })}
        </ul>
      </div>
    );
  }

  render() {
    debugger
    return (
       <div>{this.renderQuestions()}</div>
     );
  }

}

export default withRouter(TopicIndex);
