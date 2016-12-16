import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionFormNew extends React.Component {
	constructor(props) {
		super(props);
		this.state = { first_name: "", last_name: "", email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
	}

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

	renderLoginErrors() {
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

	guestLogin(e) {
		e.preventDefault();
		const user = { email: 'han_solo@starwars.com', password: '12345' }
		this.props.login({user}).then(() => {
			this.props.router.push("/");
		})
	}

	render() {
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

						<div className="login-buttons">
								<div className="guest-login-btn">
									<input type="button"
										onClick={(e) => this.guestLogin(e)}
										className="auth-form-btn btn"
										value="Guest login" />
								</div>

								<div className="submit login-btn">
			            <input type="submit"
			              className="auth-form-btn btn"
			              value="Login" />
								</div>
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
