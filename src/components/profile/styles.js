import styled from 'styled-components';

export const ProfilePictureContainer = styled.div`
	justify-content: center;
	display: flex;
	align-items: center;
`;

export const ProfilePicture = styled.img`
	position: absolute;
	top: 2vh;
	left: 2vw;
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

export const EditProfilePicContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 25vw;
	padding: 25px;
	background-color: rgba(255, 255, 255, 0.7);
	z-index: 30;
`;

export const EditTitle = styled.h3`
	font-color: black;
	font-family: Helvetica, sans-serif;
`;

export const ImagePreview = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 50%;
`;

export const SaveButton = styled.button`
	width: 60%;
	outline: 0;
	background-color: green;
	border-radius: 3px;
	margin-top: 2vh;
	padding: 5px 3px;
`;

export const SaveButtonText = styled.p`
	color: white;
	font-weight: 400;
	letter-spacing: 0.7px;
	font-size: 16px;
	font-family: sans-serif;
`;
