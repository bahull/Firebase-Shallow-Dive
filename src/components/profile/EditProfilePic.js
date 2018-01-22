import React, { Component } from 'react';

import { firestore, firebase } from '../../fire';
import {
	EditProfilePicContainer,
	EditTitle,
	ImagePreview,
	SaveButton,
	SaveButtonText,
} from './styles';

export default class EditProfilePic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			file: '',
			imagePreview: '',
			loading: false,
		};
		this.handlePreview = this.handlePreview.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}

	handlePreview(event) {
		let reader = new FileReader();
		let file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				file: file,
				imagePreviewUrl: reader.result,
			});
		};
		reader.readAsDataURL(file);
	}

	handleUpload() {
		const { file } = this.state;
		const { closeModal, uid } = this.props;
		const storageRef = firebase.storage().ref();
		const uploadTask = storageRef
			.child('profilePictures/' + file.name)
			.put(file);
		uploadTask.on(
			'state_changed',
			snapshot => {
				console.log(snapshot);
			},
			error => {
				console.log(error);
			},
			success => {
				firestore
					.collection('users')
					.doc(uid)
					.update({
						profilePic: uploadTask.snapshot.downloadURL,
					})
					.then(() => {
						closeModal();
					});
			}
		);
	}

	componentDidMount() {}
	render() {
		const { imagePreviewUrl } = this.state;
		return (
			<EditProfilePicContainer>
				<EditTitle> Change your Profile Picture </EditTitle>
				<ImagePreview src={imagePreviewUrl || this.props.profilePic} />
				<input
					type="file"
					onChange={event => {
						this.handlePreview(event);
					}}
				/>
				<SaveButton onClick={this.handleUpload}>
					<SaveButtonText>Update Profile Picture</SaveButtonText>
				</SaveButton>
			</EditProfilePicContainer>
		);
	}
}
