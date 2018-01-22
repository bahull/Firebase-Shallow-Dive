import React, { Component } from 'react';
import { firestore } from '../../fire';
import { TaskContainer, TaskName, DueTime, DeleteButton } from './styles';

export default class Task extends Component {
	constructor(props) {
		super(props);

		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem() {
		firestore
			.collection('users')
			.doc(this.props.uid)
			.update({
				tasks: this.props.allTasks.filter(x => {
					return x.id !== this.props.task.id;
				}),
			});
	}

	render() {
		const { name, due, completed } = this.props.task;

		return (
			<TaskContainer completed={completed}>
				<TaskName>{name}</TaskName>
				<DueTime>{due}</DueTime>
				<DeleteButton onClick={this.deleteItem}>Delete</DeleteButton>
			</TaskContainer>
		);
	}
}
