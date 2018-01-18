import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
	width: 45vw;
	height: 45vh;
	opacity: 0.75;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.13);
	background-color: white;
	border-radius: 10px;
`;

export const SignOutButton = styled.button`
	position: absolute;
	bottom: 15px;
	right: 50px;
	flex: 0;
	width: 15vw;
	height: 3vh;
	background-color: white;
	color: black;
	font-size: Helvetica;
	font-weight: 700;
	border-radius: 5px;
	opacity: 0.3;
	align-items: center;

	&:hover {
		opacity: 0.7;
	}
`;

export const TabBar = styled.span`
	display: flex;
	height: 15%;
`;

export const TabText = styled.p`
	color: white;
	font-family: Helvetica;
	letter-spacing: 0.5px;
	font-size: 1.6em;
	font-weight: 400;
`;

export const TabContent = styled.div`
	margin-bottom: 15%;
	height: 85%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const LoginTab = styled.span`
	border-top-left-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
	background-color: #2196f3;
	filter: ${props =>
		!props.selected ? 'brightness(110%)' : 'brightness(100%)'};
	&:hover {
		filter: brightness(110%);
	}
`;

export const TabTitle = styled.p`
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	color: black;
	font-family: Helvetica;
`;

export const TextInput = styled.input`
	font-size: 18px;
	display: block;
	outline: none;
	border: 0;
	border-bottom: ${props =>
		props.error ? '1.8px solid red' : '1.8px solid grey'};
	border-radius: 3px;
	margin-bottom: ${props => (props.last ? '35px' : '25px')};
	padding-bottom: 3px;

	&:focus {
		box-shadow: none;
		outline: none;
		border-color: #757575;
	}
`;

export const SubmitButton = styled.button`
	width: 40%;
	align-items: center;
	border-width: 0;
	outline: none;
	border-radius: 2px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
	background-color: #4caf50;
	color: white;
	transition: background-color 0.3s;
	&:hover,
	&:focus {
		background-color: #43a047;
	}
`;

export const ButtonText = styled.p`
	text-align: center;
	font-size: 16px;
	font-weight: bold;
	color: white;
`;

export const RegisterTab = styled.span`
	border-top-right-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
	background-color: green;
	filter: ${props =>
		props.selected ? 'brightness(110%)' : 'brightness(100%)'};
	&:hover {
		filter: brightness(110%);
	}
`;
