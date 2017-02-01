import React from 'react';
import { withRouter, Link } from 'react-router';

class FollowedQuestionsBlock extends React.Component {
constructor(props) {
  super(props);
  this.state = { followees: this.props.followees }
}

componentDidMount() {
}

getQuestionsList() {
  const followees = this.sortByKey(this.props.followees, 'follow_created_at');
  const questions = [];
  for (let i = 0; i < 10 && i < followees.length; i++) {
    const followee_questions = this.sortByKey(followees[i].followee_questions, 'created_at');
    for (let j = 0; j < 5 && j < followee_questions.length; j++) {
      questions.push(followee_questions[j]);
    }
  }
  return this.sortByKey(questions, 'created_at');
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
  const questions = this.getQuestionsList();
  return (
    <div className="questions-list-container">
      <ul className="questions-list">
        {questions.map((question, i) => {
          const followSingleQuestion = this.props.question_id === question.id ? "follow-single-question-container-active" : "follow-single-question-container"
          const now = new Date();
          const author = question.auth_first_name + ' ' + question.auth_last_name;
          const userpic = question.auth_userpic_url;
          return (
            <li key={question.id + now} className="follow-question-list-el">
              <Link to={this.getFollowQuestionLink(question)}>
                <div className={followSingleQuestion}>
                <div><Link className="auth-info" to={`/users/${question.author_id}`}>{author}</Link>
                  {this.getDate(question, now, 'asked')}
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

getDate(obj, now, str) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(obj.created_at);
  const qMon = monthNames[date.getMonth()];
  const qDay = date.getDate();
  const qYr = date.getFullYear()
  const dif = Math.floor((now - date) / 1000);
  if (dif < 30) {
    return <span className="follow-question-date">{` ${str} just now`}</span>
  } else if (dif < 60) {
    return <span className="follow-question-date">{` ${str} less than a minute ago`}</span>
  } else if (dif < 120) {
    return <span className="follow-question-date">{` ${str} less than 2 minutes ago`}</span>
  } else if (dif < 300) {
    return <span className="follow-question-date">{` ${str} less than 5 minutes ago`}</span>
  } else if (dif < 600) {
    return <span className="follow-question-date">{` ${str} less than 10 minutes ago`}</span>
  } else if (dif < 3600) {
    return <span className="follow-question-date">{` ${str} less than an hour ago`}</span>
  } else if (dif < 86400) {
    return <span className="follow-question-date">{` ${str} today`}</span>
  } else if (dif < 172800) {
    return <span className="follow-question-date">{` ${str} yesterday`}</span>
  } else {
    return <span className="follow-question-date">{` ${str} on ${qMon} ${qDay} ${qYr}`}</span>
  }
}

render() {

  return (
    <div className="followed-users-questions-container">
      <div className="followed-question-title">
        <span>Recent questions from your favorite authors</span>
      </div>
      {this.renderQuestions()}
    </div>
  );

}

}


export default withRouter(FollowedQuestionsBlock);
