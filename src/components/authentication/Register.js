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
						email: this.state.email,
						profilePic:
							'http://hope4merton.com/wp-content/uploads/2015/12/profile-placeholder.gif',
						tasks: [
							{
								name: 'My First Task',
								due: '12/17/2018 1:00 PM',
								completed: false,
								id: Math.ceil(Math.random() * Math.pow(3, 30)),
							},
						],
					});
			})
			.catch(error => {
				this.setState({ error: error.message });
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
