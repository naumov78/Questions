import React from 'react';
import { Link, withRouter } from 'react-router';
import { IndexLogo } from '../auth_form';


class TopicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topics: [] };
  }

  componentDidMount() {
    this.props.fetchTopics().then(response => {
      this.setState({
        topics: response.topics
      });
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    // debugger
    // const user = this.state;
    // debugger
    // this.props.signup({user}).then(() => {
    //   this.props.router.push("/");
  // });
    this.props.router.push('/');
  }


renderTopics() {
  return (
  <div className="auth-form topic-list">
    <form className="topic-list-form" onSubmit={(e) => this.handleSubmit(e)}>
    <div className="topic-list-title"><h2>What are your interests</h2></div>
      <div className="three-columns">
        <div className="topics-left">
          <ul>
            {this.state.topics.map((topic, i) => {
              if (i < 9) {
              return (<li key={`topic-${topic.id}`}><input type="checkbox"/>{topic.title}</li>);
            }
          })}
          </ul>
        </div>
        <div className="topics-middle">
          <ul>
            {this.state.topics.map((topic, i) => {
              if (i > 8 && i < 18) {
              return (<li key={`topic-${topic.id}`}><input type="checkbox"/>{topic.title}</li>);
            }
          })}
          </ul>
        </div>
        <div className="topics-right group">
          <ul>
            {this.state.topics.map((topic, i) => {
              if (i > 17) {
              return (<li key={`topic-${topic.id}`}><input type="checkbox"/>{topic.title}</li>);
            }
          })}
          </ul>
        </div>
      </div>

      <div className="submit-topics">
        <input type="submit"
          className="auth-form-btn"
          value="Save" />
      </div>

    </form>
  </div>
  );
}



render () {
  // debugger
  return (
    <div className="index-page">
      <IndexLogo />
      {this.renderTopics()}
    </div>
  );
}

}

export default withRouter(TopicForm);
