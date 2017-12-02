import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';


class App extends Component  {
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <Routes/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

const styles = {
  container: {
    width: '100vw',
    height: '100%'
  }
};
