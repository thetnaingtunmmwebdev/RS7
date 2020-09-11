import React from 'react';
import Item from './Item';
import List from './List';
import { connect } from 'react-redux';

class App extends React.Component {

  input = React.createRef();

  render() {
    return(
      <div>
        <h1>Hello React</h1>
        <List>
          {this.props.users.map(user => {
            return(
              <Item key={user._id} _id={user._id} user={user}/>
            )
          })}
        </List>
        <input type="text" placeholder="Name" ref={this.input} />
        <button onClick={this.props.add}>ADD</button>
      </div>
    ); //JSX
  }
}

function stateToProps(state){
  return {
    users: state,
  }
}

function dispatchToProps(dispatch){
  return {
    add: ()=> {
      dispatch({ type: 'ADD', data: { _id: 3, name: 'Bob', gender: 'M'} });
    },
  }
}

const ReduxApp = connect(stateToProps, dispatchToProps)(App);

export default ReduxApp;
