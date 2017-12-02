import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component  {
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          {routes}
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
