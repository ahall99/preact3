import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			valid: false,
			submitted: false
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
	}
	
	handleChange(e) {
		// This will cause the entire form component to rerender
		// Since it's small we will let this fact slide
		this.setState({email: e.target.value});
	}
	
	validateEmail(e) {
		e.preventDefault();
		
		var valid = false;
		var email = this.state.email; // for shorthand
		if ((email.endsWith('.com') ||
			email.endsWith('.edu')) &&
			email.includes('@')) {
			//validationText.textContent = "Email successfully recorded.";
			valid = true;
		}
		
		this.setState({
			valid: valid,
			submitted: true
		});
	}
	
	render() {
		return (
			<form onSubmit={this.validateEmail} action="" method="get" noValidate>
				<h2>Form</h2>
				
				<div className="text-input">
					<label htmlFor="username">Username:</label>
					<input type="text" name="username" id="username" required />
				</div>
				
				<div className="text-input">
					<label htmlFor="email">E-mail:</label>
					<input type="email" onChange={this.handleChange} name="email" id="email" required />
					<ValidationText submitted={this.state.submitted} valid={this.state.valid} />
				</div>
				
				<div className="radio-group">
					<p>Account type:</p>
				
					<div className="radio-option">
						<input type="radio" id="student" name="account-type" value="student" defaultChecked={true} />
						<label htmlFor="student">Student</label>
					</div>
					
					<div className="radio-option">
						<input type="radio" id="instructor" name="account-type" value="instructor" />
						<label htmlFor="instructor">Instructor</label>
					</div>
				</div>
				
				<input type="submit" id="submit" value="Submit" />
			</form>
		);
	}
}

// This component is so small it is not in its own file
class ValidationText extends React.Component {
	render() {
		var text = this.props.valid ? "Email successfully recorded." : "Invalid email address.";
		
		if (this.props.submitted) {
			return <p>{text}</p>;
		}
		return null;
	}
}

export default Form;