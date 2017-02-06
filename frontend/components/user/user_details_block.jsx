import React from 'react';
import { Link, withRouter } from 'react-router';


class UserDetailsBlock extends React.Component {
constructor(props) {
  super(props);
  this.state = { details: false, questions: false, answers: false }
}


componentDidMount() {
}


componentWillMount() {
}

getQuestionStat(question) {
let answers, upvotes, watched;
if (question.answers_num === 0) {
  answers = null;
} else {
  answers = <span className="stat-details">Answers: {question.answers_num}</span>
}
if (question.liked_users.length === 0) {
  upvotes = null
} else {
  upvotes = <span className="stat-details">Upvotes: {question.liked_users.length}</span>
}
if (question.watched_users.length === 0) {
  watched = null;
} else {
  watched = <span className="stat-details">Watchers: {question.watched_users.length}</span>
}

  return (
    <div className="details-question-stats">
      {answers}
      {upvotes}
      {watched}
    </div>
  )
}

getAnswerStat(answer) {
  let upvotes, comments;
  if (answer.liked_users_num === 0) {
    upvotes = null;
  } else {
    upvotes = <span className="stat-details">Upvotes: {answer.liked_users_num}</span>
  }
  if (answer.comments_num === 0) {
    comments = null;
  } else {
    comments = <span className="stat-details">Comments: {answer.comments_num}</span>
  }

  return (
    <div className="details-question-stats">
      {upvotes}
      {comments}
    </div>
  );
}



getDate(obj, now, str) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(obj.created_at);
  const qMon = monthNames[date.getMonth()];
  const qDay = date.getDate();
  const qYr = date.getFullYear()
  const dif = Math.floor((now - date) / 1000);
  if (dif < 30) {
    return ` ${str} just now`
  } else if (dif < 60) {
    return ` ${str} less than a minute ago`
  } else if (dif < 120) {
    return ` ${str} less than 2 minutes ago`
  } else if (dif < 300) {
    return ` ${str} less than 5 minutes ago`
  } else if (dif < 600) {
    return ` ${str} less than 10 minutes ago`
  } else if (dif < 3600) {
    return ` ${str} less than an hour ago`
  } else if (dif < 86400) {
    return ` ${str} today`
  } else if (dif < 172800) {
    return ` ${str} yesterday`
  } else {
    return ` ${str} on ${qMon} ${qDay} ${qYr}`
  }
}

sortByKey(array, key) {
  return array.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return ((x < y) ? 1 : ((x > y) ? -1 : 0));
  });
}

cutName(str) {
  if (str.length > 25) {
    return str.slice(0, 22) + "...";
  }
  return str;
}

getQuestionsList(user) {
  const questions = user.questions;
  this.sortByKey(questions, "created_at")
  return (
    <div>
      <div>
        <span className="user-details-container-title">{`${this.getUserName(user)} Questions`}</span>
        <span className="user-details-container-title inactive"><button onClick={this.switchToAnswers.bind(this)}>{`${this.getUserName(user)} Answers`}</button></span>
      </div>
      <div className="details-questions-container">
        <ul>
          {questions.map((question, i) => {
            const now = new Date();
            return (
              <li key={i} className="details-single-question">
                <Link to={`/topics/${question.topic_id}/questions/${question.id}`}>
                  <div className="details-question-body">
                    {question.body}
                  </div>
                  <div>
                    <div className="details-question-topic">
                      Topic: {question.topic}
                    </div>
                    <div className="details-question-date">
                      {this.getDate(question, now, "asked")}
                    </div>
                      {this.getQuestionStat(question)}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}


getAnswersList(user) {
  const answers = user.answers;
  this.sortByKey(answers, "created_at")
  return (
    <div>
      <div>
        <span className="user-details-container-title inactive"><button onClick={this.switchToQuestions.bind(this)}>{`${this.getUserName(user)} Questions`}</button></span>
        <span className="user-details-container-title">{`${this.getUserName(user)} Answers`}</span>
      </div>
      <div className="details-questions-container">
        <ul>
          {answers.map((answer, i) => {
            const now = new Date();
            return (
              <li key={i} className="details-single-answer">
                <Link to={`/topics/${answer.question.topic_id}/questions/${answer.question_id}`}>
                  <div className="details-question-body">
                    {answer.body}
                  </div>

                  <div>
                    <div className="details-question-date">
                        {this.getDate(answer, now, "answered")}
                    </div>
                    <div className="details-question-topic">
                      Question: <span id="question-link">{answer.question.body}</span>
                    </div>
                    <div className="details-question-topic">
                      Topic: {answer.question_topic}
                    </div>
                     {this.getAnswerStat(answer)}
                  </div>


                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

getUserName(user) {
  let username = user.first_name + ' ' + user.last_name;
  if (store.getState().session.currentUser.id === user.id) {
    username = "Your"
  }
  return this.cutName(username);
}

getDetails(user) {
  if (this.state.details && this.state.questions) {
    return this.getQuestionsList(user)
  } else if (this.state.details && this.state.answers) {
    return this.getAnswersList(user)
  } else {
    return null;
  }
}

showDetails() {
  this.setState({ details: true, questions: true });
}

hideDetails() {
  this.setState({ details: false });
}

switchToAnswers() {
  this.setState({ questions: false, answers: true })
}

switchToQuestions() {
  this.setState({ questions: true, answers: false })
}


getDetailsBtn(user) {
  if (this.state.details) {
    return <button className="cancel-link link details-btn" onClick={this.hideDetails.bind(this)}>{`Hide ${this.getUserName(user)} statistics`}</button>
  } else if (!this.state.details) {
    return <button className="cancel-link link details-btn" onClick={this.showDetails.bind(this)}>{`Show ${this.getUserName(user)} statistics`}</button>
  }
}


render() {
  const user = store.getState().user.user
  if (typeof user.id !== 'undefined') {
  return (
    <div>
    {this.getDetailsBtn(user)}
    {this.getDetails(user)}
    </div>
  );
} else {
  return null;
}

}

}

export default withRouter(UserDetailsBlock)
