import React from 'react';

const styles = {
  list: {
    background: 'gray',
    padding: 20,
    color: 'white'
  }
}

class List extends React.Component {
  render () {
    return (
      <ul style={styles.list}>
        {this.props.children}
      </ul>
    )
  }
}

export default List;
