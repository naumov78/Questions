import React from 'react';
import { Link, withRouter } from 'react-router';
import { IndexLogo } from '../auth_form';


class TopicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topics: [], subscribedTopics: [] };
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

  handleSelection(id) {
    debugger
    if (this.state.subscribedTopics.includes(id)) {
      const idx = this.state.subscribedTopics.indexOf(id);
      const arrayOfTopics = this.state.subscribedTopics;
      const spliced = arrayOfTopics.splice(idx, 1);
      this.setState({ subscribedTopics: arrayOfTopics});
    } else {
      const arrayOfTopics = this.state.subscribedTopics;
      arrayOfTopics.push(id);
      this.setState({ subscribedTopics: arrayOfTopics});
      }
  }

  createSubscriptions(e) {
    debugger
    e.preventDefault();
    this.state.subscribedTopics.forEach((id) => {
      new UserSubscribedTopic(user_id: currentUser.id, topic_id: id);
    });
    this.props.router.push("/");
  }



renderTopics() {
  // debugger
  return (
  <div className="auth-form topic-list">
    <form className="topic-list-form" onSubmit={(e) => this.createSubscriptions(e)}>
    <div className="topic-list-title"><h2>What are your interests</h2></div>
      <div className="three-columns">
        <div className="topics-left">
          <ul>
            {this.state.topics.map((topic, i) => {
              if (i < 9) {
              return (<li key={`topic-${topic.id}`}><input type="checkbox" onClick={() => this.handleSelection(i)} id={`${i}`}/>{topic.title}</li>);
            }
          })}
          </ul>
        </div>
        <div className="topics-middle">
          <ul>
            {this.state.topics.map((topic, i) => {
              if (i > 8 && i < 18) {
              return (<li key={`topic-${topic.id}`}><input type="checkbox" onClick={() => this.handleSelection(id)}  id={`${i}`}/>{topic.title}</li>);
            }
          })}
          </ul>
        </div>
        <div className="topics-right group">
          <ul>
            {this.state.topics.map((topic, i) => {
              if (i > 17) {
              return (<li key={`topic-${topic.id}`}><input type="checkbox"  onClick={() => this.handleSelection(id)}  id={`${i}`}/>{topic.title}</li>);
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



//
