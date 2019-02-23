import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import themes from './theme';
import axios from 'axios'
class App extends Component {
  state = { currentTheme: '' }

  componentDidMount() {
    // this.setTheme();
    this.getData();
  }
  getData = () =>{
    axios.get('http://192.168.0.48:1234/app')
      .then(response=>{
        console.log("response is:",response)
        this.setState({currentTheme:response.data[0].name})
      })
      .catch(error =>{
        console.log("error is",error)
      })
  }
  setTheme = () => {
    console.log("in setTheme")
    const theme = themes[this.state.currentTheme];
    Object.keys(theme).forEach((key) => {
      const cssKey = `--${key}`;
      const cssValue = theme[key];
      document.body.style.setProperty(cssKey, cssValue);
      console.log("css style:", cssKey, cssValue)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentTheme !== prevState.currentTheme) {
      this.setTheme();
    }
  }

  toggleTheme = () => {
    console.log("Hello")
    let currentTheme = this.state.currentTheme
    if (currentTheme == 'dark') {
      this.setState({ currentTheme:'light'  });
    } else {
      this.setState({ currentTheme: 'dark'});
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Learn React */}
          </a>
          <button onClick={this.toggleTheme}>Switch</button>
        </header>
      </div>
    );
  }
}

export default App;
