import './App.css';
import { Component } from 'react';
import Header from "./component/Header";
import Content from "./component/Content";

class App extends Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          <Header></Header>
        </header>
        <content>
          <Content></Content>
        </content>
      </div>
    );
  }
}

export default App;
