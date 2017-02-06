import React from 'react';
import { withRouter } from 'react-router'


class HeaderAskForm extends React.Component {
constructor(props) {
  super(props);
  this.state = { askForm: "" }
}

update(field) {
  return e =>
  this.setState({
    [field]: e.currentTarget.value
  });
}


handleSubmit(e) {
  e.preventDefault();
  this.props.updateAskForm(this.state.askForm);
  this.setState({askForm: ""});
  this.props.router.push("/createq");
}

render () {

  return (
      <form className="ask-form" onSubmit={(e) => this.handleSubmit(e)}>
        <input className="text-input" type="text" onChange={this.update("askForm")} placeholder="Ask Question" value={this.state.askForm}></input>
        <input className="header-ask-btn" type="submit" value="Ask Question"/>
      </form>
  );
}


}


export default withRouter(HeaderAskForm);
