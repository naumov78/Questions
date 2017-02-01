import React from 'react';
import { withRouter, Link } from 'react-router';

class WatchedQuestionsBlock extends React.Component {
constructor(props) {
  super(props);
  this.state = { watched_questions: this.props.watched_questions }
}

componentDidMount() {

}

componentWillMount() {
}

componentWillReceiveProps(newProps) {
}


sortByKey(array, key) {
  return array.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return ((x < y) ? 1 : ((x > y) ? -1 : 0));
  });
}

updateBodyLength(str){
  if (str && str.length > 300) {
    return str.slice(0, 297) + '...';
  }
  return str;
}

getFollowQuestionLink(question) {
  if (this.props.question_id === question.id) {
    return null;
  }
  return `topics/${question.topic_id}/questions/${question.id}`;
}

renderQuestions() {
  const questions = this.props.watched_questions;
  return (
    <div className="watched-questions-list-container">
      <ul className="watched-questions-list">
        {questions.map((question, i) => {
          const followSingleQuestion = this.props.question_id === question.id ? "watched-single-question-container-active" : "watched-single-question-container"
          const now = new Date();
          this.sortByKey(question.answers, "created_at")
          const author = question.answers[0].user.first_name + ' ' + question.answers[0].user.last_name;
          return (
            <li key={question.id + now} className="follow-question-list-el">
              <Link to={this.getFollowQuestionLink(question)}>
                <div className={followSingleQuestion}>
                <div><Link className="auth-info" to={`/users/${question.answers[0].user.id}`}>{author}</Link>
                  {this.getDate(question, now, 'answered')}
                </div>
                <div className="follow-question-body">
                  {this.updateBodyLength(question.body)}
                </div>
              </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}



getDate(question, now, str) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(question.answers[0].created_at);
  const qMon = monthNames[date.getMonth()];
  const qDay = date.getDate();
  const qYr = date.getFullYear()
  const dif = Math.floor((now - date) / 1000);
  if (dif < 30) {
    return <span className="recent-watched-question-date">{` ${str} just now`}</span>
  } else if (dif < 60) {
    return <span className="recent-watched-question-date">{` ${str} less than a minute ago`}</span>
  } else if (dif < 120) {
    return <span className="recent-watched-question-date">{` ${str} less than 2 minutes ago`}</span>
  } else if (dif < 300) {
    return <span className="recent-watched-question-date">{` ${str} less than 5 minutes ago`}</span>
  } else if (dif < 600) {
    return <span className="recent-watched-question-date">{` ${str} less than 10 minutes ago`}</span>
  } else if (dif < 3600) {
    return <span className="watched-question-date">{` ${str} less than an hour ago`}</span>
  } else if (dif < 86400) {
    return <span className="watched-question-date">{` ${str} today`}</span>
  } else if (dif < 172800) {
    return <span className="watched-question-date">{` ${str} yesterday`}</span>
  } else {
    return <span className="watched-question-date">{` ${str} on ${qMon} ${qDay} ${qYr}`}</span>
  }
}

render() {
  return (
    <div className="watched-questions-container">
      <div className="watched-question-title">
        <span>Updates on your watched questions</span>
      </div>
      {this.renderQuestions()}
    </div>
  );

}

}


export default withRouter(WatchedQuestionsBlock);
