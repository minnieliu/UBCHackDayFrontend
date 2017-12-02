import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Survey extends Component {
  render() {
    return (
      <div>
        Survey Screen
        <Link to='/camera'>Camera</Link>
      </div>
    );
  }
}

export default Survey;
