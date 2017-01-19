import React from 'react';
import { Link, withRouter } from 'react-router';


class SignUpForm extends React.Component {
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
    this.props.signup({user}).then(() => {
			this.props.router.push("/settopics");
		});
  }

	renderSpecificError(fieldName) {
		let singleError = "";
		const allErrors = this.props.errors;
		allErrors.forEach(error => {
			if(error.includes(fieldName)){
				singleError = error;
			}
		});
		if (singleError === "Password is too short (minimum is 1 character)"){
			singleError = "Password is too short"
		}
		return singleError;
	}

  render() {
    return (
			<div className="signup-form-container">

				<div className="signup-title">
					<p>Sign Up</p>
				</div>

				<form onSubmit={this.handleSubmit} className="signup-form group">

				<section className="name-fields">
						<div className="name-input">
							<label className="auth-form-field-titles">first name</label>

								<input id="name" className="auth-form-input"
									type="text"
									value={this.state.first_name}
									onChange={this.update("first_name")} />
						</div>

						<div className="name-input">
							<label className="auth-form-field-titles">last name</label>

								<input id="name" className="auth-form-input"
									type="text"
									value={this.state.last_name}
									onChange={this.update("last_name")} />
						</div>
				</section>

				<section className="name-errors">
					<ul>
						<li key={`first_name_error`}>{this.renderSpecificError("First name")}</li>
						<li key={`last_name_error`}>{this.renderSpecificError("Last name")}</li>
					</ul>
				</section>


				<section className="credentials-fields">

					<div className="credentials-input">
						<label className="auth-form-field-titles">email</label>
						<input className="auth-form-input"
							type="text"
							value={this.state.email}
							onChange={this.update("email")} />
						<div className="signup-form-errors">
							{this.renderSpecificError("Email")}
						</div>
					</div>

					<div className="credentials-input">
						<label className="auth-form-field-titles">password</label>
						<input className="auth-form-input"
							type="password"
							value={this.state.password}
							onChange={this.update("password")} />
						<div className="signup-form-errors">
							{this.renderSpecificError("Password")}
						</div>
					</div>

						<p id="legal-notice">By clicking "Sign Up" you indicate
						 that you have read and agree to the Terms of Service and
						 Privacy Policy.</p>

			</section>

					<div className="submit">
						<input type="submit"
							className="auth-form-btn"
							value="Sign Up" />
					</div>

				</form>
			</div>
    );
  }

}

export default withRouter(SignUpForm);
