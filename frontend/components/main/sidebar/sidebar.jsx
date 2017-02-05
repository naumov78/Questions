import React from 'react';
import UserTopicsMenuContainer from './user_topics_menu_container';
import AddUserTopicsContainer from './add_user_topics_container';


class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { addTopics: false, allTopics: [] }
  }


  componentDidMount() {
    this.props.fetchTopics().then((topics) => {
      this.setState({ allTopics: topics.topics })
    });
  }

  toggleAddTopics() {
    this.setState({
      addTopics: !this.state.addTopics
    })
  }

  getAddTopicsBtn() {
    if (this.props.currentUser.topics.length !== this.state.allTopics.length) {
      debugger
      if (!this.state.addTopics) {
        return <span className="add-topic-btn"><button onClick={this.toggleAddTopics.bind(this)}>Add More Topics</button></span>
      } else {
        return <span className="add-topic-btn"><button onClick={this.toggleAddTopics.bind(this)}>Close</button></span>
      }
    } else {
      return null;
    }
  }

  getAddTopicsContainer() {
    if (!this.state.addTopics) {
      return null;
    } else {
      return <AddUserTopicsContainer />
    }
  }

  render() {
    return (
      <div className="sidebar">
        <h3>Feeds</h3>
        <UserTopicsMenuContainer />
        <div className="add-topic-btn-container">{this.getAddTopicsBtn()}</div>
        {this.getAddTopicsContainer()}
      </div>
    );
  }

}

export default SideBar;
