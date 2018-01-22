import React, { Component, Fragment } from 'react';

import { firestore } from '../../fire';

import { TodoContainer, Loader } from './styles';

import Task from './Task';
import CreateTask from './CreateTask';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			tasks: [],
		};

		this.handleTaskChange = this.handleTaskChange.bind(this);
	}

	handleTaskChange() {}

	componentDidMount() {
		// Used for a once pull, will have to refresh page to see updates

		// firestore
		// 	.collection('users')
		// 	.doc(this.props.uid)
		// 	.get()
		// 	.then(result => {
		// 		result.data().tasks &&
		// 			this.setState({ tasks: result.data().tasks, loading: false });
		// 	});

		// Used for real time data updates

		firestore
			.collection('users')
			.doc(this.props.uid)
			.onSnapshot(result => {
				this.setState({ tasks: result.data().tasks, loading: false });
			});
	}

	render() {
		const { tasks, loading } = this.state;
		const { uid } = this.props;
		return (
			<TodoContainer>
				{loading ? (
					<Fragment>
						<Loader> 🧜🏼‍♂️ </Loader>
					</Fragment>
				) : (
					tasks.map((x, i) => {
						return (
							<Task
								key={i}
								uid={uid}
								id={x.id}
								allTasks={this.state.tasks}
								task={x}
							/>
						);
					})
				)}
				{!loading && <CreateTask uid={uid} tasks={tasks} />}
			</TodoContainer>
		);
	}
}
