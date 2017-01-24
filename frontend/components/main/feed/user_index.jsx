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
  debugger
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


renderIndexQuestions() {
  const questions = this.getIndexQuestions();
  this.sortByKey(questions, "created_at");
  return (
    <ul>
      {questions.map((q, i) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(q.created_at);
        const qMon = monthNames[date.getMonth()];
        const qDay = date.getDate();
        const qYr = date.getFullYear()
        const authName = q.auth_first_name + ' ' + q.auth_last_name;
        const ansNumber = q.answers.length;
        debugger

        return (
          <li key={q.id}>


            <div className="single-q-list">
              <div className="topic-info">
                {`from`} <Link to={`/topics/${q.idx_topic_id}/questions/`}>{q.idx_topic_title}</Link>
              </div>
              <div className="question-author-info">
                <div className="question-author-userpic">
                  <Link to={`/users/${q.author_id}`}><img src={q.auth_userpic_url} /></Link>
                </div>
                <div className="question-author-name">
                  <span id="link-auth-name"><Link to={`/users/${q.author_id}`}>{authName}</Link></span>
                    <span className="question-author-descr">, {this.updateDescrLength(q.auth_descr)}</span>
                    <p className="question-date">asked on {qMon} {qDay} {qYr}</p>
                </div>
              </div>

              <div className="q-body">
                <Link to={`/topics/${q.idx_topic_id}/questions/${q.id}`}><span>{q.body}</span></Link>
              </div>
              <div className="question-stats">
                <span id="topic-ans-num">{this.renderAnswersQuntity(ansNumber)}</span>
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
    <div className="user-index-title">{`Most recent questions:`}</div>
    {this.renderIndexQuestions()}
  </div>
}




}

export default UserIndex;
// this.props.currentUser.index_topics[5].index_questions[1]
