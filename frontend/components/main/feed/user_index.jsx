import React from 'react';
import { withRouter, Link } from 'react-router';

class UserIndex extends React.Component {

constructor(props) {
  super(props);
}

componentWillMount() {
}

getIndexTopics() {
  return this.props.currentUser.index_topics
}

getIndexQuestions() {
  const topics = this.getIndexTopics();
  const questions = [];
  topics.forEach((topic) => {
    for (let i = 0; i < topic.index_questions.length && i < 3; i++) {
      questions.push(topic.index_questions[i]);
    }
  });
  return questions;
}

updateDescrLength(str){
  if (str && str.length > 125) {
    return str.slice(0, 124) + '...';
  }
  return str;
}

renderAnswersQuntity(num) {
  if (typeof num === 'undefined'){
    return null;
  } else {
    if (num === 0) {
      return 'No answers yet...';
    } else {
      return (
        `Answers: ${num}`
      );
    }
  }
}

sortByKey(array, key) {
  return array.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return ((x < y) ? 1 : ((x > y) ? -1 : 0));
  });
}

getDate(question, now) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(question.created_at);
  const qMon = monthNames[date.getMonth()];
  const qDay = date.getDate();
  const qYr = date.getFullYear()
  const dif = Math.floor((now - date) / 1000);
  if (dif < 30) {
    return 'asked just now'
  } else if (dif < 60) {
    return 'asked less than a minute ago'
  } else if (dif < 120) {
    return 'asked less than 2 minutes ago'
  } else if (dif < 300) {
    return 'asked less than 5 minutes ago'
  } else if (dif < 600) {
    return 'asked less than 10 minutes ago'
  } else if (dif < 3600) {
    return 'asked less than an hour ago'
  } else if (dif < 86400) {
    return 'asked today'
  } else if (dif < 172800) {
    return 'asked yesterday'
  } else {
    return `asked on ${qMon} ${qDay} ${qYr}`
  }
}


getLastAnswerDate(date, now) {
  if (typeof date === 'undefined') {
    return <span className="ans-date-rendering-8">no answers yet...</span>
  }
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const qMon = monthNames[date.getMonth()];
  const qDay = date.getDate();
  const qYr = date.getFullYear()
  const dif = Math.floor((now - date) / 1000);
  if (dif < 30) {
    return <span className="ans-date-rendering-1">answered just now</span>
  } else if (dif < 60) {
    return <span className="ans-date-rendering-2">answered less than a minute ago</span>
  } else if (dif < 120) {
    return <span className="ans-date-rendering-3">answered less than 2 minutes ago</span>
  } else if (dif < 300) {
    return <span className="ans-date-rendering-4">answered less than 5 minutes ago</span>
  } else if (dif < 600) {
    return <span className="ans-date-rendering-5">answered less than 10 minutes ago</span>
  } else if (dif < 3600) {
    return <span className="ans-date-rendering-6">answered less than an hour ago</span>
  } else if (dif < 86400) {
    return <span className="ans-date-rendering-7">answered today</span>
  } else if (dif < 172800) {
    return <span className="ans-date-rendering-8">answered yesterday</span>
  } else {
    return <span className="ans-date-rendering-9">{`answered on ${qMon} ${qDay} ${qYr}`}</span>
  }
}


renderIndexQuestions() {
  const questions = this.getIndexQuestions();
  this.sortByKey(questions, "created_at");
  return (
    <ul>
      {questions.map((q, i) => {
        const now = new Date();
        const authName = q.auth_first_name + ' ' + q.auth_last_name;
        const ansNumber = q.answers.length;

        let lastAnswerDate;
          if (q.answers.length > 0) {
            const answers = q.answers;
            {this.sortByKey(answers, "created_at")}
            lastAnswerDate = new Date(answers[0].created_at);
          }

        return (
          <li key={q.id}>


            <div className="single-q-list">
              <div className="topic-info">
                {`from`} <Link to={`/topics/${q.idx_topic_id}/questions/`}>{q.idx_topic_title}</Link>
              <span id="index-topic-ans-num">{this.getLastAnswerDate(lastAnswerDate, now)}</span>
              </div>
              <div className="empty-space"></div>
              <div className="question-author-info">
                <div className="question-author-userpic">
                  <Link to={`/users/${q.author_id}`}><img src={q.auth_userpic_url} /></Link>
                </div>
                <div className="question-author-name">
                  <span id="link-auth-name"><Link to={`/users/${q.author_id}`}>{authName}</Link></span>
                    <span className="question-author-descr">, {this.updateDescrLength(q.auth_descr)}</span>
                    <p className="question-date">{this.getDate(q, now)}</p>
                </div>
              </div>

              <div className="q-body">
                <Link to={`/topics/${q.idx_topic_id}/questions/${q.id}`}><span>{q.body}</span></Link>
              </div>
            </div>



          </li>
        )
      })}
    </ul>
  )
}

// <span>{this.getLikeButton(q)}</span>

render() {
  return <div>
    <div className="user-index-title">{`Most recent questions`}</div>
    {this.renderIndexQuestions()}
  </div>
}




}

export default UserIndex;
// this.props.currentUser.index_topics[5].index_questions[1]
