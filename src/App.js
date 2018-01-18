import React, { Component } from 'react';
import { firebase } from './fire';

import Authentication from './components/authentication';
import TodoList from './components/todolist';
import SignOut from './components/authentication/SignOut';

import { PageContainer } from './styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: '',
      checkedAuth: false,
      loading: true,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      user
        ? this.setState({ userid: user.uid, loading: false, checkedAuth: true })
        : this.setState({ checkedAuth: true, loading: false });
    });
  }

  render() {
    const { userid, checkedAuth, loading } = this.state;
    if (checkedAuth) {
      return (
        <PageContainer>
          {userid ? <TodoList> logged in </TodoList> : <Authentication />}
          {userid && <SignOut />}
        </PageContainer>
      );
    } else {
      return null;
    }
  }
}

export default App;
