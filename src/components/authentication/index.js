import React, { Component, Fragment } from 'react';

import Register from './Register';
import Login from './Login';

import {
	AuthenticationContainer,
	TabBar,
	TabText,
	LoginTab,
	RegisterTab,
} from './styles';

export default class Authentication extends Component {
	constructor(props) {
		super(props);

		this.state = {
			login: true,
			checkedAuth: false,
		};
		this.handleTabSwitch = this.handleTabSwitch.bind(this);
	}

	handleTabSwitch() {
		this.setState({ login: true });
	}

	render() {
		const { login, checkedAuth } = this.state;

		return (
			<AuthenticationContainer>
				<TabBar>
					<LoginTab
						selected={login}
						onClick={() => {
							!login && this.setState({ login: true });
						}}>
						<TabText>Login</TabText>
					</LoginTab>
					<RegisterTab
						selected={!login}
						onClick={() => {
							login && this.setState({ login: false });
						}}>
						<TabText> Register</TabText>{' '}
					</RegisterTab>
				</TabBar>
				{this.state.login ? <Login /> : <Register />}
			</AuthenticationContainer>
		);
	}
}
