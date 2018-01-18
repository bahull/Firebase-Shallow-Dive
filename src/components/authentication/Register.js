import React, { Component } from 'react';
import { firebase, firestore } from '../../fire';

import {
	TabContent,
	TabTitle,
	SubmitButton,
	ButtonText,
	TextInput,
} from './styles';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			emailError: '',
			passwordError: '',
			loading: true,
		};
		this.createAccount = this.createAccount.bind(this);
	}

	createAccount() {
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(result => {
				firestore
					.collection('users')
					.doc(result.uid)
					.set({
						name: 'Los Angeles',
						state: 'CA',
						country: 'USA',
					});
			})
			.catch(error => {
				console.log(error);
				error.message.includes('email')
					? this.setState({ emailError: true })
					: this.setState({ passwordError: false });
			});
	}

	componentDidMount() {}
	render() {
		return (
			<TabContent>
				<TabTitle>Register</TabTitle>
				<TextInput
					error={this.state.emailError}
					placeholder="Email"
					onChange={e => {
						this.setState({ email: e.target.value });
					}}
				/>
				<TextInput
					last
					error={this.state.passwordError}
					type="password"
					placeholder="Password"
					onChange={e => {
						this.setState({ password: e.target.value });
					}}
				/>
				<SubmitButton onClick={this.createAccount}>
					{' '}
					<ButtonText>Create Account</ButtonText>{' '}
				</SubmitButton>
			</TabContent>
		);
	}
}
