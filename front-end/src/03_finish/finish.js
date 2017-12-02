import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Finish extends Component {
  render() {
    return (
      <div>
        Finish Screen
        <Link to='/'>Back to Start</Link>

      </div>
    );
  }
}

export default Finish;
