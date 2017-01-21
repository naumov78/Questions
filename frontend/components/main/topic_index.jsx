import React from 'react';
import { withRouter, Link } from 'react-router';


class TopicIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: {} }
    this.renderQuestions = this.renderQuestions.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.params.topic_id);
    this.getQuestions(id);
  }

  getQuestions(id) {
    this.props.fetchSingleTopic(id).then(({questions}) => {
      this.setState({ questions: questions })
    });
  }


  componentWillReceiveProps(newProps) {
    const id = newProps.params.topic_id;
    if (id !== this.props.params.topic_id) {
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
      likeBtn = <button onClick={() => this.dislike(question)} className="upvote-btn">Downvote | {question.liked_users.length}</button>
    } else {
      const likes = question.liked_users.length;
      likeBtn = <button onClick={() => this.addLike(question)} className="upvote-btn">Upvote | {likes}</button>
    }
    return likeBtn;
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
                  <Link to={`/topics/${topic_id}/questions/${q.id}`}><span>{q.body}</span></Link>
                </div>
                <div className="question-stats">
                  {this.getLikeButton(q)}
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
