import React, { Component } from 'react';
import { firebase } from './fire';

import Authentication from './components/authentication';
import TodoList from './components/todolist';
import SignOut from './components/authentication/SignOut';
import Profile from './components/profile';

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
          {userid ? (
            <div>
              <Profile uid={userid} />
              <TodoList uid={userid}> logged in </TodoList>
            </div>
          ) : (
            <Authentication />
          )}
          {userid && <SignOut />}
        </PageContainer>
      );
    } else {
      return null;
    }
  }
}

export default App;
