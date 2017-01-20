import React from 'react';
import { withRouter, Link } from 'react-router';



class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: false, answer_body: "" };
  }


  componentDidMount() {
    this.getQuestion();
  }

  getQuestion() {
    const question_data = {topic_id: this.props.params.topic_id , question_id: this.props.params.question_id };
    this.props.fetchSingleQuestion({question_data});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState(nextProps)
    }
  }

  componentDidUpdate() {
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  addLike(question) {
    this.props.likeQuestion(currentUser.id, question.id).then(() => {
      this.getQuestion();
    });
  }

  dislike(question) {
    this.props.dislikeQuestion(currentUser.id, question.id, 2).then(() => {
      this.getQuestion();
    });
  }

  checkIfLiked(question) {
  if (question && question.length !== 0) {
    for (let i = 0; i < question.liked_users.length; i++ ) {
      if (question.liked_users[i].id === currentUser.id) {
        return true;
      }
    }
  }
  return false;
  }

  getLikeButton(question) {
    let likeBtn;
    if (question && question.length !== 0) {
      if (this.checkIfLiked(question)) {
        likeBtn = <button className="ans-btn" id="vote-btn" onClick={() => this.dislike(question)}>Downvote | {question.liked_users.length}</button>
      } else {
        const likes = question.liked_users.length;
        likeBtn = <button className="ans-btn" id="vote-btn" onClick={() => this.addLike(question)}>Upvote | {likes}</button>
      }
    } else {
      likeBtn = null;
    }
    return likeBtn;
  }

  renderAnswersQuntity() {
    if (typeof this.props.answers === 'undefined'){
      return null;
    } else {
      if (this.props.answers.length === 0) {
        return (
          <div className="total-answers">
            <p>No answers yet...</p>
          </div>
        );
      } else {
        return (
          <div className="total-answers"><p>{this.props.answers.length} answers</p></div>
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

  renderAnswers() {
    if (typeof this.props.answers === 'undefined'){
      return null;
    } else {
      this.sortByKey(this.props.answers, "created_at");
      return (
        <div>
          <p className="answers-quan">{this.renderAnswersQuntity()}</p>
          <ul className="answers-list">
              {this.props.answers.map((ans, i) => {
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const date = new Date(ans.created_at);
                const author = ans.ans_auth_first_name + ' ' + ans.ans_auth_last_name;
                return (
                  <li key={ans.id + date}>
                    <div className="single-answer-list">
                      <div className="ans-date">
                        <div className="auth-answer-pic"><Link to={`/users/${ans.author_id}`}><img src={ans.ans_auth_userpic_url} /></Link></div>
                        <p className="ans-date"><span id="ans-auth"><Link to={`/users/${ans.author_id}`}>{author}</Link></span> wrote {monthNames[date.getMonth()]} {date.getDate()}</p>
                      </div>
                      <div className="answer-body">
                        {ans.body}
                      </div>
                      <div className="questions-attr">
                        <div className="views-count">{Math.ceil(this.props.params.topic_id/5+i)}.{Math.ceil(this.props.params.topic_id/10+i)}k Views</div>
                        <button className="upvote-btn">Upvoters | {Math.ceil(this.props.params.topic_id/20+i)}</button>
                        <button className="attt-links">Downvote</button>
                        <button className="attt-links">Comments</button>
                        <button className="comments-count">{Math.ceil(this.props.params.topic_id/2-i)}+</button>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      );
    }
  }

  getRandomTen() {
    return Math.ceil(Math.random()*10)
  }

  getRandomHundred() {
    return Math.ceil(Math.random()*100)
  }

  handleCreateAnswer(e) {
    e.preventDefault();
    const topic_id = parseInt(this.props.params.topic_id);
    const question_id = parseInt(this.props.params.question_id);
    const newAnswer = {question_id: question_id, author_id: currentUser.id, body: this.state.answer_body }
    this.props.createAnswer(newAnswer, topic_id)
    this.setState({answer: false});
  }

  goToUserProfile(e) {
    e.preventDefault();
    if (this.props.location.pathname !== `/users/${this.props.currentUser.id}`) {
      this.props.router.push(`/users/${this.props.currentUser.id}`)
    }
  }

  updateDescrLength(str){
    if (str && str.length > 125) {
      return str.slice(0, 124) + '...';
    }
    return str;
  }

  render () {
    let authName, userpic, userId, descr, date, qMon, qDay, qYr;
    if (this.props.question.topic_id !== 0) {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const author = this.props.question.user;
      authName = this.props.question.first_name + ' ' + this.props.question.last_name;
      userpic = this.props.question.author_userpic_url;
      userId = this.props.question.author_id;
      descr = this.props.question.description;
      date = new Date(this.props.question.created_at);
      qMon = monthNames[date.getMonth()];
      qDay = date.getDate();
      qYr = date.getFullYear();
    }

    if (!this.state.answer){
    return (
      <div className="single-question-container">
        <div className="question-part">
          <div className="question-author-info">
            <div className="question-author-userpic">
              <Link to={`/users/${userId}`}><img src={userpic} /></Link>
            </div>
            <div className="question-author-name">
              <span id="link-auth-name"><Link to={`/users/${userId}`}>{authName}</Link></span>
              <span className="question-author-descr">, {this.updateDescrLength(descr)}</span>
              <p className="question-date">asked on {qMon} {qDay} {qYr}</p>
            </div>
          </div>
          <div className="single-question-body">{this.props.question.body}</div>
          <div className="question-buttons">
            <button className="ans-btn" onClick={() => this.setState({answer: true})}>Add answer</button>
            <span>{this.getLikeButton(this.state.question)}</span>
            <button className="attt-links">Follow</button>
            <button className="comments-count">{Math.ceil(this.props.params.topic_id/8)}</button>
            <button className="attt-links">Comment</button>
            <button className="attt-links">Share</button>
            <button className="comments-count">{Math.ceil(this.props.params.topic_id/5)}</button>
            <button className="attt-links">Downvote</button>
          </div>
        </div>
        <div className="answers-part">
          <div className="answers">
            {this.renderAnswers()}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="single-question-container">
        <div className="question-author-info">
          <div className="question-author-userpic">
            <Link to={`/users/${userId}`}><img src={userpic} /></Link>
          </div>
          <div className="question-author-name">
            <span id="link-auth-name"><Link to={`/users/${userId}`}>{authName}</Link></span>
            <span className="question-author-descr">, {this.updateDescrLength(descr)}</span>
            <p className="question-date">asked on {qMon} {qDay} {qYr}</p>
          </div>
        </div>
        <div className="single-question-body">{this.props.question.body}</div>
        <div className="ans-form">
          <form className="answer-form" onSubmit={(e) => this.handleCreateAnswer(e)}>
            <div className="answer-input">
                <textarea
                onChange={this.update("answer_body")}
                className="auth-form-input answer-input"/>
            </div>
            <br />
            <div className="answer-buttons">
                <button onClick={() => this.setState({answer: false})}>Cancel</button>
                <input className="ans-btn"
                  type="submit"
                  value="Add answer"/>
            </div>
          </form>
        </div>
        <div className="answers-part">
          <div className="answers">
            {this.renderAnswers()}
          </div>
        </div>

      </div>
    );
  }
  }

}

export default SingleQuestion;
