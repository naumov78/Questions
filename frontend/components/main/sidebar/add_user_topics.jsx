import React from 'react';
import { Link, withRouter } from 'react-router';

class AddUserTopics extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allTopics: [] }
  }

  componentDidMount() {
    this.props.fetchTopics().then((topics) => {
      this.setState({
        allTopics: topics.topics
      });
    });
  }

  getUnsubscribedTopics() {
    const allTopics = this.state.allTopics
    const subscribedTopics = this.props.currentUser.topics
    const unsubscribedTopics = allTopics.filter((el) => {
      let pick = true
      const id = el.id
        subscribedTopics.forEach((topic) => {
          if (topic.id === id)
           pick = false
        });
      return pick
    });
  return (
    <div className="add-topic-menu">
    <p>Choose a topic to subscribe</p>
    <ul className="add-topic-list">
    {unsubscribedTopics.map((topic, i) => {
        return <li key={i} className="add-topic-single-topic">
          <button onClick={(e) => this.handleSubmit(e, topic.id)}>{topic.title}</button>
          </li>
    })}
  </ul>
  </div>
  );
  }

  getUser(topic_id) {
    const topics = []
    this.props.currentUser.topics.forEach((topic) => {
      topics.push(topic.id)
    });
    topics.push(topic_id)
    return {
      id: this.props.currentUser.id,
      topic_ids: topics
    };
  };

  handleSubmit(e, topic_id) {
    e.preventDefault();
    this.props.updateUser(this.getUser(topic_id), this.props.currentUser.id).then((response) => {
      this.setState({ subscsribedTopics: [] })
    });
  };


  render() {
    if (this.props.currentUser) {
    return (
        <div>
          {this.getUnsubscribedTopics()}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}

export default AddUserTopics;
