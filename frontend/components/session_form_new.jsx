import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionFormNew extends React.Component {
	constructor(props) {
		super(props);
		this.state = { first_name: "", last_name: "", email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	// componentWillReceiveProps(newProps){
	// 	debugger
	// }

	// componentDidUpdate() {
	// 	this.redirectIfLoggedIn();
	// }
	//
	// redirectIfLoggedIn() {
	// 	// if (this.props.loggedIn) {
	// 	// 	// this.props.router.push("/login");
	// 	// 	// debugger
	// 	// 	this.props.router.push(`/users/${this.props.currentUser.id}`);
	// 	// }
	// }

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user}).then(() => {
			this.props.router.push("/");
		})
  }
	// this.props.router.push(`/users/${this.props.currentUser.id}`);

		renderLoginErrors() {
		// debugger
			return(
				<ul>
					{this.props.errors.map((error, i) => (
						<li key={`error-${i}`}>
							{error}
						</li>
					))}
				</ul>
			);
		}


	render() {
		// debugger
		return (

        <div className="login-form-container group">

					<div className="login-title">
						<p>Login</p>
					</div>


          <form onSubmit={this.handleSubmit} className="login-form group">

						<div className="credentials-input">
	            <label className="auth-form-field-titles"></label>
              <input className="auth-form-input"
                type="text"
                value={this.state.email}
								placeholder="Email"
                onChange={this.update("email")} />
						</div>

						<div className="credentials-input">
	            <label className="auth-form-field-titles"></label>
              <input className="auth-form-input"
                type="password"
								placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")} />
						</div>

						<div className="submit login-btn">
	            <input type="submit"
	              className="auth-form-btn"
	              value="Login" />
						</div>

          </form>

					<div className="login-form-errors">
						 {this.renderLoginErrors()}
					</div>

        </div>


		);
	}

}

export default withRouter(SessionFormNew);


// <div className="444login-form-errors">
//
// </div>
// {this.renderErrors()}

//
// <div className="index-page">
// 	<div className="logo">
// 		<h1>Questions</h1>
// 	</div>
//
// 	<div className="slogan">
// 		<h2>Answer to any question</h2>
// 	</div>
//
// 	<div className="auth-form">
