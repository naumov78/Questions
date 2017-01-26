import React from 'react';
import { withRouter, Link } from 'react-router';
import QuestionFormContainer from '../question/question_form_container';


class TopicIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic_id: null, topic_title: null, questions: {}, showQuickAnswer: 0, answer_body: ""}
    this.renderQuestions = this.renderQuestions.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.params.topic_id);
    this.getQuestions(id);
  }

  getQuestions(id) {
    this.props.fetchSingleTopic(id).then((success) => {
      const topic_id = success.topic_id;
      const topic_title = success.topic_title;
      const questions = success.questions;
      this.setState({ topic_id: topic_id, topic_title: topic_title, questions: questions })
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillReceiveProps(newProps) {
    const id = newProps.params.topic_id;
    if (id !== this.props.params.topic_id) {
      this.setState({showQuickAnswer: 0, answer_body: ""})
      this.getQuestions(id);
    }
  }

  updateDescrLength(str){
    if (str && str.length > 125) {
      return str.slice(0, 124) + '...';
    }
    return str;
  }

  addLike(question) {
    const id = Number(this.props.params.topic_id);
    this.props.likeQuestion(this.props.currentUser.id, question.id).then(() => {
      this.getQuestions(id);
    });
  }

  dislike(question) {
    const id = Number(this.props.params.topic_id);
    this.props.dislikeQuestion(this.props.currentUser.id, question.id, 1).then(() => {
      this.getQuestions(id);
    });
  }

  checkIfLiked(question) {
    if (this.props.currentUser) {
      for (let i = 0; i < question.liked_users.length; i++ ) {
        if (question.liked_users[i].id === this.props.currentUser.id) {
          return true;
        }
      }
    }
    return false;
  }

  getLikeButton(question) {
    let likeBtn;
    if (this.checkIfLiked(question)) {
      likeBtn = <span>
      <button className="upvote-btn-liked">Upvoters | {question.liked_users.length}</button>
      <span><a onClick={() => this.dislike(question)} className="downvote-link">Downvote</a></span>
      </span>
    } else {
      const likes = question.liked_users.length;
      likeBtn = <button onClick={() => this.addLike(question)} className="upvote-btn">Upvoters | {likes}</button>
    }
    return likeBtn;
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

  renderQuestions() {
    const topic_id = parseInt(this.props.params.topic_id);
    if (this.props.questions.length === 0) {
      const topicId = Number(this.props.params.topic_id);
      const topicTitle = this.state.topic_title;
      return (
        <div><QuestionFormContainer topicId = {topicId} topicTitle = {topicTitle} fromTopic = {true} /></div>
      );
    } else {
      {this.getQuestion(this.props.questions[0])}
    }

    return (
      <div className="topic-questions">
        {this.getInnerNav()}
        <ul>
          {this.props.questions.map(q => {
            const authName = q.author_first_name + ' ' + q.author_last_name;
            const ansNumber = q.answers.length;
            const now = new Date();
            return (
            <li key={q.id * now} className="topic-question-container">
              <div className="single-q-list">
                <div className="question-author-info">
                  <div className="question-author-userpic">
                    <Link to={`/users/${q.author_id}`}><img src={q.author_userpic_url} /></Link>
                  </div>
                  <div className="question-author-name">
                    <span id="link-auth-name"><Link to={`/users/${q.author_id}`}>{authName}</Link></span>
                      <span className="question-author-descr">, {this.updateDescrLength(q.author_descr)}</span>
                      <p className="question-date">{this.getQuestionDate(q, now)}</p>
                  </div>
                </div>

                <div className="q-body">
                  <Link to={`/topics/${topic_id}/questions/${q.id}`}><span>{q.body}</span></Link>
                </div>
                <div className="question-stats">
                  <span>{this.getLikeButton(q)}</span>
                  <span id="topic-ans-num">{this.renderAnswersQuntity(ansNumber)}</span>
                  <span><button className="ans-btn add-quick-ans-btn" onClick={() => this.toggleQuickAnswer(q)}>Quick Answer</button></span>
                  {this.getQuickAnswerForm(q)}
                </div>
              </div>
            </li>
            );
          })}
        </ul>
      </div>
    );
  }

  toggleQuickAnswer(q) {
    if (this.state.showQuickAnswer === q.id) {
      return this.setState({ showQuickAnswer: 0, answer_body: ""})
    } else {
      return this.setState({ showQuickAnswer: q.id, answer_body: "" })
    }
  }

  getAddBtn(field, value) {
    if (field.length > 0) {
      return <input className="ans-btn add-quick-ans-btn" type="submit" value={value}/>
    }
    return <button id="not-active-quickans" className="not-active-btn">{value}</button>
  }

  handleCreateAnswer(e, question) {
    e.preventDefault();
    const topic_id = parseInt(this.props.params.topic_id);
    const question_id = question.id;
    const newAnswer = {question_id: question_id, author_id: this.props.currentUser.id, body: this.state.answer_body }
    this.props.createAnswer(newAnswer, topic_id).then(() => {
      this.getQuestions(topic_id);
      this.setState({showQuickAnswer: 0, answer_body: ""});
    });
  }



  getQuickAnswerForm(question) {
    if (this.state.showQuickAnswer === question.id) {
      return (
      <div className="quick-ans-container">
        <div className="quick-answer">
          <form onSubmit={(e) => this.handleCreateAnswer(e, question)}>
            <textarea className="auth-form-input"
              placeholder="Start writing your answer"
              autoFocus={true}
              value={this.state.answer_body}
              onChange={this.update("answer_body")}/>
            {this.getAddBtn(this.state.answer_body, 'Add answer')}
          </form>
        </div>
      </div>
      )
    } else {
      return <div className="invisible"></div>;
    }
  }

  checkLoggedIn(){
    if (!this.props.currentUser) {
      this.props.router.push("/login");
    }
  }

  getQuestionDate(question, now) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(question.date);
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


  getInnerNav() {
    const id = this.state.topic_id;
    const title = this.state.topic_title;
    return (
    <div className="inner-nav">
      <Link to={`/topics/${id}/questions`}>{title}</Link>
    </div>
    );
  }

  render () {
    this.checkLoggedIn();
    return (
      <div>
        {this.renderQuestions()}
      </div>
     );
  }

  getQuestion(question) {
    const question_data = {topic_id: this.props.params.topic_id , question_id: question.id };
    this.props.fetchSingleQuestion({question_data})
  }



}




export default withRouter(TopicIndex);
