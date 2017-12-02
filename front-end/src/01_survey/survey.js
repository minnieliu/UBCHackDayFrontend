import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';

class Survey extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.scrollContainer}>
          <h1>Tell us about you!</h1>
          <RaisedButton>
            <Link to='/camera'>Camera</Link>
          </RaisedButton>
        </div>
      </div>
    );
  }
}

export default Survey;

const styles = {
  container: {
    backgroundColor: '#67c2ff',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column',
    height: '100%'
  },
  scrollContainer: {
    display: 'flex',
    flex: 'none',
    flexFlow: 'column',
    alignItems: 'center',
    padding: '0 150px',

    color: '#FFF',
    border: '1px solid yellow',
    height: 'min-content',
    minHeight: 1600,
    width: '100%',

  }
};