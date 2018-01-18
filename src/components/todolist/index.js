import React, { Component } from 'react';

import { TodoContainer } from './styles';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {}
	render() {
		return <TodoContainer />;
	}
}
