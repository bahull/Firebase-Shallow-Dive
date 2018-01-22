import styled from 'styled-components';

export const TodoContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	width: 70vw;
	height: 80vh;
	overflow-x: hidden;
`;

export const Loader = styled.p`
	font-family: Helvetica, sans-serif;
	color: white;
	font-size: 5em;
	font-weight: 400;
	text-align: center;
`;

export const TaskContainer = styled.span`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	min-width: 70%;
	height: 30%;
	margin-bottom: 10px;
	padding-bottom: 20px;
	background-color: ${props => (props.completed ? 'green' : 'white')};
	opacity: 0.6;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.13);
	border-radius: 3px;
`;

export const TaskName = styled.p`
	font-family: Helvetica, sans-serif;
	font-weight: 800;
	font-size: 1.6em;
	text-align: center;
`;

export const DueTime = styled.p`
	font-family: Helvetica, sans-serif;
	font-weight: 800;
	font-size: 1.3em;
	text-align: center;
`;

export const DeleteButton = styled.button`
	background-color: red;
	color: white;
	opacity: 0.8;
	border: none;
	border-radius: 3px;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.13);
	padding: 10px;
	margin-top: 2%;
	font-size: 1em;
	font-family: Helvetica;
`;

export const CreateContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	min-width: 70%;
	margin-bottom: 10px;
	background-color: rgba(76, 175, 80, 0.9);
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.13);
	border-radius: 3px;
`;

export const CreateText = styled.button`
	opacity: 1;
	outline: none;
	width: 100%;
	background-color: transparent;
	color: white;
	margin: 10px 0;
	font-weight: 800;
	font-family: Helvetica;
	font-size: 2.3em;
	border: 0;
	border-width: 0;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.8);
	width: 100%;
	padding: 30px 0;
`;

export const TextInput = styled.input`
	font-size: 18px;
	display: block;
	outline: none;
	border: 0;
	width: 60%;
	background-color: transparent;
	border-bottom: 1.8px solid grey;
	border-radius: 3px;
	margin-bottom: ${props => (props.last ? '35px' : '25px')};
	padding-bottom: 10px;

	&:focus {
		box-shadow: none;
		outline: none;
		border-color: #757575;
	}
`;

export const SaveButton = styled.button`
	background-color: rgba(3, 155, 229, 0.8);
	opacity: 1;
	color: white;
	font-size: 1.5em;
	font-weight: 500;
	font-family: Helvetica, sans-serif;
	width: 40%;
	padding: 10px 0;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.13);
	border-radius: 3px;
`;
