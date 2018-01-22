import React from 'react';
import { firebase } from '../../fire';

import { SignOutButton } from './styles';

const SignOut = () => {
	return (
		<SignOutButton
			onClick={() => {
				firebase
					.auth()
					.signOut()
					.then(() => window.location.reload());
			}}>
			Sign Out
		</SignOutButton>
	);
};

export default SignOut;
