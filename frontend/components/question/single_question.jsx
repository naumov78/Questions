import React from 'react';
import { withRouter, Link } from 'react-router';
import RightPart from '../right_part';



class SingleQuestion extends React.Component {

constructor(props) {
  super(props);
  this.state = { answer: false, answer_body: "", showComments: 0, addComment: false, commentBody: "", fetching: true };
}

componentDidMount() {
  this.getQuestion(true)
}

getQuestion(fetching) {
  const question_data = {topic_id: this.props.params.topic_id, question_id: this.props.params.question_id };
  if (fetching) {
    this.props.fetchSingleQuestion({question_data}).then(() => {
      this.setState({fetching: false})
    });
  } else {
    this.setState({fetching: false });
    this.props.fetchSingleQuestion({question_data}).then(() => {
      this.setState({fetching: false})
    });
  }
}

componentWillReceiveProps(nextProps) {
  if (this.props !== nextProps) {
    this.setState(nextProps, this.setState({fetching: true}))
  }

  let id = nextProps.params.question_id;
  if (id !== this.props.params.question_id) {
    id = Number(nextProps.params.question_id);
    const topic_id = Number(nextProps.params.topic_id)
    const question_data = {topic_id: topic_id, question_id: id };
    this.props.fetchSingleQuestion({question_data}).then(() => {
      this.setState({fetching: false})
    });
  }
}

componentDidUpdate() {
}

componentWillMount() {

}

componentWillUnmount() {
}


update(field) {
  return (e) => {
    this.setState({
    [field]: e.currentTarget.value
  })
}
}

// question likes

addLike(question) {
  this.props.likeQuestion(this.props.currentUser.id, question.id).then(() => {
    this.getQuestion(false);
  });
}

dislike(question) {
  this.props.dislikeQuestion(this.props.currentUser.id, question.id, 2).then(() => {
    this.getQuestion(false);
  });
}

checkIfLiked(question) {
  if (question) {
    if (question.liked_users && question.liked_users.length > 0) {
      for (let i = 0; i < question.liked_users.length; i++ ) {
        if (question.liked_users[i].id === this.props.currentUser.id) {
          return true;
        }
      }
    }
  } else {
  return false;
  }
}

getLikeButton(question) {
  if (question) {
    let likeBtn;
      if (this.checkIfLiked(question)) {
        likeBtn = <span>
        <button className="ans-btn-liked" id="vote-btn">Upvotes | {question.liked_users.length}</button>
        <span><a onClick={() => this.dislike(question)} className="downvote-link">Downvote</a></span>
        </span>
      } else {
        let likes;
        if (typeof question.liked_users === 'undefined') {
          likes = 0
        } else {
          likes = question.liked_users.length;
        }
        likeBtn = <button className="ans-btn" id="vote-btn" onClick={() => this.addLike(question)}>Upvotes | {likes}</button>
      }
    return likeBtn;
  } else {
    return null;
  }
}


// watch question

watchQuestion(question) {
  this.props.watchQuestion(this.props.currentUser.id, question.id).then(() => {
    this.getQuestion(false);
  });
}

unwatchQuestion(question) {
  this.props.unwatchQuestion(this.props.currentUser.id, question.id).then(() => {
    this.getQuestion(false);
  });
}

checkIfWatched(question) {
  if (question) {
    if (question.watched_users && question.watched_users.length > 0) {
      for (let i = 0; i < question.watched_users.length; i++ ) {
        if (question.watched_users[i].id === this.props.currentUser.id) {
          return true;
        }
      }
    }
  } else {
  return false;
  }
}

getWatchButton(question) {
  if (question) {
    let watchBtn;
      if (this.checkIfWatched(question)) {
        watchBtn = <span>
        <button onClick={() => this.unwatchQuestion(question)} className="auth-unfollow-btn" id="watch-btn">Unwatch question | {question.watched_users.length}</button>
        </span>
      } else {
        let watchers;
        if (typeof question.watched_users === 'undefined') {
          watchers = 0
        } else {
          watchers = question.watched_users.length;
        }
        watchBtn = <button className="auth-follow-btn" id="watch-btn" onClick={() => this.watchQuestion(question)}>Watch question | {watchers}</button>
      }
    return watchBtn;
  } else {
    return null;
  }
}


// answer likes

addAnswerLike(answer) {
  this.props.likeAnswer(this.props.currentUser.id, answer.id).then(() => {
    this.getQuestion(false);
  });
}

dislikeAnswer(answer) {
  this.props.dislikeAnswer(this.props.currentUser.id, answer.id).then(() => {
    this.getQuestion(false);
  });
}

checkIfAnswerLiked(answer) {
if (answer.liked_users && answer.liked_users.length !== 0) {
  for (let i = 0; i < answer.liked_users.length; i++ ) {
    if (answer.liked_users[i].id === this.props.currentUser.id) {
      return true;
    }
  }
}
return false;
}

getAnswerLikeButton(answer) {
  let likeBtn;
    if (this.checkIfAnswerLiked(answer)) {
      likeBtn =
      <span>
      <button className="ans-btn-liked">Upvotes | {answer.liked_users.length}</button>
      <span><a onClick={() => this.dislikeAnswer(answer)} className="downvote-link">Downvote</a></span>
      </span>
    } else {
      let likes;
       if (typeof answer.liked_users === 'undefined') {
         likes = 0;
       } else {
         likes = answer.liked_users.length;
       }
      likeBtn = <button className="ans-btn" onClick={() => this.addAnswerLike(answer)}>Upvotes | {likes}</button>
    }
  return likeBtn;
}

renderAnswersQuntity() {
  if (typeof this.props.answers === 'undefined'){
    return null;
  } else {
    if (this.props.answers.length === 0) {
      return (
      <div className="answer-quantity-light">
        <span className="answer-number-light">No answers yet...</span>
      </div>
      );
    } else {
      return (
        <div className="answer-quantity">
          <span className="answer-number">{`Answers: ${this.props.answers.length}`}</span>
      </div>
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

// comments

getComments(ans) {
  if (this.state.showComments === ans.id) {
    const comments = ans.comments;
    this.sortByKey(comments, 'created_at');
    const id = ans.id
    if (ans.comments.length === 0) {
      return (
        <div className="comments">
        {this.renderAddCommentForm(id)}
        <div className="single-comment">{`No comments yet...`}</div>
      </div>
    );
    }
    return (
      <div className="comments">
        {this.renderAddCommentForm(id)}
        <ul className="comments-list">
          {comments.map((comment, i) => {
            const author = comment.author.first_name + ' ' + comment.author.last_name;
            const userpic = comment.author_userpic_url;
            const now = new Date();
            return (
            <li key={(i + 5) * new Date()} className="single-comment">
              <div className="comment-data">
                <div className="author-info">
                  <Link to={`users/${comment.author_id}`} id="comment-userpic"><img src={userpic} /></Link>
                  <Link to={`users/${comment.author_id}`} id="comment-author">{author}</Link>
                  <span id="comment-date">{this.getDate(comment, now, "left a comment")}</span>
                </div>
                <div className="comment-boby">{comment.body}</div>
              </div>
              <div className="comment-like-buttons">{this.getCommentLikeButton(comment)}</div>
            </li>
          );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

renderAddCommentForm(id) {
  if (this.state.addComment) {
    return (
      <div className="comment-form-container">
        <form className="comment-form" onSubmit={(e) => this.handleCreateComment(e, id)}>
          <div className="comment-input">
            <textarea autoFocus={true}
              placeholder='Start writing your comment'
              onChange={this.update("commentBody")}
              value={this.state.commentBody}
              className="auth-form-input comment-input"/>
            <span className="add-comment-btn">
              {this.getAddBtn(this.state.commentBody, 'Add comment')}
            </span>
          </div>
        </form>
      </div>
    )
  } else {
    return null;
  }
}

getCommentsNumber(ans) {
  if (typeof ans.comments !== 'undefined') {
    const num = ans.comments.length;
    if (num === 0) {
      return null;
    } else if (num > 999) {
      return (<span className="comments-count">{`999+`}</span>);
    }
    return (<span className="comments-count">{num}</span>);
  }
}

toggleComments(id) {
  if (this.state.showComments === id) {
    return this.setState({ showComments: 0, addComment: false })
  } else {
    return this.setState({ showComments: id, addComment: false })
  }
}

toggleAddComment(id) {
  if (this.state.showComments === id && !this.state.addComment) {
    return this.setState({ addComment: true, commentBody: "", answer: false, answer_body: ""})
  } else if (this.state.showComments !== id && !this.state.addComment) {
    return this.setState({ showComments: id, addComment: true, commentBody: "", answer: false, answer_body: ""})
  } else if (this.state.showComments === id && this.state.addComment) {
    return this.setState({ addComment: false })
  } else if (this.state.showComments !== id && this.state.addComment) {
    return this.setState({ showComments: id, addComment: true, commentBody: "", answer: false, answer_body: ""})
  }
}


handleCreateComment(e, id) {
  e.preventDefault();
  const newComment = { answer_id: id, body: this.state.commentBody }
  this.props.createComment(newComment).then(() => {
    this.setState({ showComments: id, addComment: false, fetching: false })
  });
}

// comments likes

addCommentLike(comment) {
  this.props.likeComment(comment.id).then(() => {
    this.getQuestion(false);
  });
}

dislikeComment(comment) {
  this.props.dislikeComment(comment.id).then(() => {
    this.getQuestion(false);
  });
}

checkIfCommentLiked(comment) {
if (comment.liked_users && comment.liked_users.length !== 0) {
  for (let i = 0; i < comment.liked_users.length; i++ ) {
    if (comment.liked_users[i].id === this.props.currentUser.id) {
      return true;
    }
  }
}
return false;
}

getCommentLikeButton(comment) {
  let likeBtn;
    if (this.checkIfCommentLiked(comment)) {
      likeBtn =
      <span>
      <button className="ans-btn-liked">Upvotes | {comment.liked_users.length}</button>
      <span><a onClick={() => this.dislikeComment(comment)} className="downvote-link">Downvote</a></span>
      </span>
    } else {
      let likes;
       if (typeof comment.liked_users === 'undefined') {
         likes = 0;
       } else {
         likes = comment.liked_users.length;
       }
      likeBtn = <button className="ans-btn" onClick={() => this.addCommentLike(comment)}>Upvotes | {likes}</button>
    }
  return likeBtn;
}

renderAnswers() {
  if (typeof this.props.answers === 'undefined'){
    return null;
  } else {
    this.sortByKey(this.props.answers, "created_at");
    return (
      <div>
        <ul className="answers-list">
            {this.props.answers.map((ans, i) => {
              const author = ans.ans_auth_first_name + ' ' + ans.ans_auth_last_name;
              const singleAnswer = ans;
              const now = new Date();
              return (
                <li key={ans.id + now}>
                  <div className="single-answer-list">
                    <div className="ans-date">
                      <div className="auth-answer-pic"><Link to={`/users/${ans.author_id}`}><img src={ans.ans_auth_userpic_url} /></Link></div>
                      <p className="ans-date"><span id="ans-auth"><Link to={`/users/${ans.author_id}`}>{author}</Link></span>{this.getDate(ans, now, "wrote")}</p>
                    </div>
                    <div className="answer-body">
                      {ans.body}
                    </div>
                    <div className="questions-attr">
                      {this.getAnswerLikeButton(singleAnswer)}
                      <button className="attt-links" onClick={() => this.toggleComments(ans.id)}>Comments</button>
                      {this.getCommentsNumber(ans)}
                      <button className="attt-links" onClick={() => this.toggleAddComment(ans.id)}>Add comment</button>
                    </div>
                  </div>
                  <div className="comments-container">{this.getComments(ans)}</div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}


handleCreateAnswer(e) {
  e.preventDefault();
  const topic_id = parseInt(this.props.params.topic_id);
  const question_id = parseInt(this.props.params.question_id);
  const newAnswer = {question_id: question_id, author_id: this.props.currentUser.id, body: this.state.answer_body }


  this.props.createAnswer(newAnswer, topic_id).then(() => {
    this.setState({answer: false});
    this.getQuestion(false);
  });
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

checkLoggedIn(){
  if (!this.props.currentUser) {
    this.props.router.push("/login");
  }
}

cutTitle(str) {
  if (str.length > 75) {
    return str.slice(0, 70) + "...";
  }
  return str;
}

getInnerNav() {
  if (this.props.question.body !== "") {
    const topic_id = this.props.question.topic_id;
    const topic_title = this.props.question.topic_title;
    const quest_id = this.props.question.id;
    const quest_title = this.cutTitle(this.props.question.body);
    return (
    <div className="inner-nav">
      <Link to={`/topics/${topic_id}/questions`}>{topic_title}</Link>
      <span>{` >> `}</span>{quest_title}
    </div>
    );
  }
}

getDateText(dif, str, qMon, qDay, qYr) {
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

getDate(obj, now, str) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(obj.created_at);
  const qMon = monthNames[date.getMonth()];
  const qDay = date.getDate();
  const qYr = date.getFullYear()
  const dif = Math.floor((now - date) / 1000);
  return this.getDateText(dif, str, qMon, qDay, qYr);
}


getAddBtn(field, value) {
  if (field.length > 0) {
    return <input className="ans-btn" type="submit" value={value}/>
  }
  return <button className="not-active-btn">{value}</button>
}

checkIfFollow(id) {
  if (id && this.state.question) {
    const out_follows = this.state.question.out_follows;
    for (let i = 0; i < out_follows.length; i++) {
      if (out_follows[i].followee_id === id) {
        return true;
      }
    }
  }
  return false;
}


// follow

getFollowBtn(id) {
  if (id === this.props.currentUser.id) {
    return null;
  }
  if (this.checkIfFollow(id)) {
    return <button onClick={(e) => this.unfollow(e, id)} className="auth-unfollow-btn">Unfollow author | -</button>
  } else {
    return <button onClick={(e) => this.follow(e, id)} className="auth-follow-btn">Follow author | +</button>
  }
}

follow(e, id) {
  e.preventDefault();
  this.props.follow(this.props.currentUser.id, id).then(() => {
    this.getQuestion(false);
  })
}

unfollow(e, id) {
  e.preventDefault();
  this.props.unfollow(this.props.currentUser.id, id).then(() => {
    this.getQuestion(false);
  })
}

getFolloweesQuestionsBlock() {
  if (typeof this.state.question !== 'undefined') {
    if (this.state.question.out_follows.length > 0) {
      return <RightPart followees={this.state.question.followees} question_id={this.state.question.id} watched_questions={this.state.question.watched_questions}/>
    } else {
      return null;
    }
  } else {
    return null;
  }
}

render () {
  this.checkLoggedIn();
  let authName, userpic, userId, descr, now;
  // if (this.props.question.topic_id !== 0) {
  if (!this.state.fetching) {
    const author = this.props.question.user;
    now = new Date();
    authName = this.props.question.first_name + ' ' + this.props.question.last_name;
    userpic = this.props.question.author_userpic_url;
    userId = this.props.question.author_id;
    descr = this.props.question.description;

      if (!this.state.answer) {
      return (
      <div>
        <div className="single-question-container">
          {this.getInnerNav()}
          <div className="question-part">
            <div className="question-author-info">
              <div className="question-author-userpic">
                <Link to={`/users/${userId}`}><img src={userpic} /></Link>
              </div>
              <div className="question-author-name">
                <span id="one">
                  <span id="link-auth-name"><Link to={`/users/${userId}`}>{authName}</Link></span>
                  <span className="question-author-descr">, {this.updateDescrLength(descr)}</span>
                  <p className="question-date">{this.getDate(this.props.question, now, "asked")}</p>
                </span>
                <span id="two">{this.getFollowBtn(userId)}</span>
              </div>
            </div>
            <div className="single-question-body">{this.props.question.body}</div>
            <div className="question-buttons group">
              <span id="one">
                <button className="ans-btn" onClick={() => this.setState({answer: true, addComment: false})}>Add answer</button>
                {this.getLikeButton(this.state.question)}
              </span>
              <span id="two">
                {this.getWatchButton(this.state.question)}
              </span>
            </div>
            {this.renderAnswersQuntity()}
          </div>
          <div className="answers-part">
            <div className="answers">
              {this.renderAnswers()}
            </div>
          </div>
        </div>
        {this.getFolloweesQuestionsBlock()}
      </div>
      );
    } else {
      now = new Date();
      return (
      <div>
        <div className="single-question-container">
          {this.getInnerNav()}
          <div className="question-part">
            <div className="question-author-info">
              <div className="question-author-userpic">
                <Link to={`/users/${userId}`}><img src={userpic} /></Link>
              </div>
              <div className="question-author-name">
                <span id="one">
                  <span id="link-auth-name"><Link to={`/users/${userId}`}>{authName}</Link></span>
                  <span className="question-author-descr">, {this.updateDescrLength(descr)}</span>
                  <p className="question-date">{this.getDate(this.props.question, now, "asked")}</p>
                </span>
                <span id="two">{this.getFollowBtn(userId)}</span>
              </div>
            </div>
            <div className="single-question-body">{this.props.question.body}</div>
            <div className="ans-form">
              <form className="answer-form" onSubmit={(e) => this.handleCreateAnswer(e)}>
                <div className="answer-input">
                    <textarea autoFocus={true}
                      placeholder="Start writing your answer"
                    onChange={this.update("answer_body")}
                    className="auth-form-input answer-input"/>
                </div>
                <div className="answer-buttons">
                    <button className="cancel-button" onClick={() => this.setState({answer: false, answer_body: ""})}>Cancel</button>
                    {this.getAddBtn(this.state.answer_body, 'Add answer')}
                </div>
              </form>
            </div>
          </div>
          <div className="answers-part">
            <div className="answers-2">
              {this.renderAnswers()}
            </div>
          </div>
        </div>
        {this.getFolloweesQuestionsBlock()}
      </div>
      );
    }
  } else { return (<div><div className="loader"></div></div>) }
}

}

export default withRouter(SingleQuestion);
