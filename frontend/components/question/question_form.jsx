import React from 'react';
import { withRouter } from 'react-router';


class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic_id: 0, body: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTopics();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newQuestion = this.state;
    this.props.createQuestion(newQuestion).then(
      this.props.router.push(`/topics/${this.state.topic_id}/questions`)
    )
  }

  selectTopic(field) {
    return (e) => this.setState({
      [field]: parseInt(e.currentTarget.value)
    });
  }

  getTopics() {
    return (
      <select name="topics" value={this.state.topic_id} onChange={this.selectTopic("topic_id")}>
        { this.props.topics.map((topic) => {
        return  (<option key={`${topic.id}`} value={`${topic.id}`}>{topic.title}</option>);
        })}
      </select>
    );
  }

  render() {
    return (
      <div className="create-question-container">
        <form id="ask-question-form" onSubmit={this.handleSubmit} className="create-question-form">
          <div className="question-input">
            <textarea
            onChange={this.update("body")}
            className="auth-form-input answer-input"/>
          </div>
          <br />
          <div className="button-part">
            <div className="dd-topic">{this.getTopics()}</div>
            <div id="add-question" className="answer-buttons">
              <input type="submit"
                className="ans-btn"
                value="Ask Question" />
            </div>
          </div>
        </form>

      </div>
    );
  }

}


export default withRouter(QuestionForm);
