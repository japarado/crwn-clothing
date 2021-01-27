import React, {useState} from "react";
import {connect} from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import {googleSignInStart, emailSignInStart} from "redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({emailSignInStart, googleSignInStart}) =>  
{
	const [userCredentials, setCredentials] = useState({email: "michael@mailinator.com", password: "12341234"});

	const {email, password} = userCredentials;
	const handleSubmit = async (e) => 
	{
		e.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = (e) => 
	{
		const {value, name} = e.target;

		setCredentials({...userCredentials, [name]: value});
	};

	return(
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={email}
					handleChange={handleChange}
					label="email"
					required/>

				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
					label="password"
					required/>

				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn>Sign In With Google</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>  dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
