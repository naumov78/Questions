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

  updateDescrLength(str){
    if (str && str.length > 125) {
      return str.slice(0, 124) + '...';
    }
    return str;
  }

  renderQuestions() {
    const topic_id = parseInt(this.props.params.topic_id);
    return (
      <div className="topic-questions">
        <ul>
          {this.props.questions.map(q => {
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const authName = q.author_first_name + ' ' + q.author_last_name;
            const date = new Date(q.date);
            const qMon = monthNames[date.getMonth()];
            const qDay = date.getDate();
            const qYr = date.getFullYear();
            return <li key={q.id}>
              <div className="single-q-list">
                <div className="question-author-info">
                  <div className="question-author-userpic">
                    <Link to={`/users/${q.author_id}`}><img src={q.author_userpic_url} /></Link>
                  </div>
                  <div className="question-author-name">
                    <span id="link-auth-name"><Link to={`/users/${q.author_id}`}>{authName}</Link></span>
                      <span className="question-author-descr">, {this.updateDescrLength(q.author_descr)}</span>
                      <p className="question-date">asked on {qMon} {qDay} {qYr}</p>
                  </div>
                </div>



                <div className="q-body">
                  <Link to={`/topics/${topic_id}/questions/${q.id}`}>{q.body}</Link>
                </div>
              </div>
            </li>
          })}
        </ul>
      </div>
    );
  }

  render() {
    return (
       <div>{this.renderQuestions()}</div>
     );
  }

}

export default withRouter(TopicIndex);
