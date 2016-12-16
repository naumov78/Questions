import React from 'react';
import { withRouter } from 'react-router';



class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: false, answer_body: "" };
  }


  componentDidMount() {

    const question_data = {topic_id: this.props.params.topic_id , question_id: this.props.params.question_id };
    this.props.fetchSingleQuestion({question_data});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState(nextProps)
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
                return (
                  <li key={ans.id}>
                    <div className="single-answer-list">
                      <div className="ans-date">
                        <p className="ans-date"> - Written {monthNames[date.getMonth()]} {date.getDate()}</p>
                      </div>
                      <div className="answer-body">
                        {ans.body}
                      </div>
                      <div className="questions-attr">
                        <div className="views-count">{Math.ceil(this.props.params.topic_id/5+i)}.{Math.ceil(this.props.params.topic_id/10+i)}k Views</div>
                        <button className="upvote-btn">Upvote | {Math.ceil(this.props.params.topic_id/20+i)}</button>
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
  }

  render () {
    if (!this.state.answer){
    return (
      <div className="single-question-container">
        <div className="question-part">
          <div className="single-question-body">{this.props.question.body}</div>
          <div className="question-buttons">
            <button className="ans-btn" onClick={() => this.setState({answer: true})}>Add answer</button>
            <button className="ans-btn" id="request">Request</button>
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
