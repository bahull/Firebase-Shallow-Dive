import React, { Component } from 'react';
import { firebase } from '../../fire';

import {
	TabContent,
	TabTitle,
	SubmitButton,
	ButtonText,
	TextInput,
} from './styles';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			emailError: '',
			passwordError: '',
			loading: true,
		};
		this.loginUser = this.loginUser.bind(this);
	}

	loginUser() {
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(result => {
				let userid = result.uid;
				firebase
					.firestore()
					.collection(userid)
					.doc(userid)
					.set({
						name: 'Los Angeles',
						state: 'CA',
						country: 'USA',
					});
			})
			.catch(console.log);
	}

	componentDidMount() {}
	render() {
		return (
			<TabContent>
				<TabTitle>Login</TabTitle>
				<TextInput
					placeholder="Email"
					onChange={e => {
						this.setState({ email: e.target.value });
					}}
				/>
				<TextInput
					last
					type="password"
					placeholder="Password"
					onChange={e => {
						this.setState({ password: e.target.value });
					}}
				/>
				<SubmitButton onClick={this.loginUser}>
					{' '}
					<ButtonText>Login</ButtonText>{' '}
				</SubmitButton>
			</TabContent>
		);
	}
}
