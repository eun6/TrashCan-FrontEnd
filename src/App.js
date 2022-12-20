import './App.css';
import { Component } from 'react';
import Header from "./component/Header";
import Content from "./component/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode : 'default',
      selected_menu : 0,
      default : {id : 0, context : '지금 떠오르는 생각을 아무렇게 적어보세요.'},
      content : [
        {id : 1, sub : 'write', context : '새로운 내용을 작성하려고 합니다.'},
        {id : 2, sub : 'Trash Can', context : '작성한 내용을 버리겠습니다.'}
      ],
      save : {id : 3, sub : '저장하기', context : '기존 내용을 보여주겠습니다.'}
    }

  }

  render() {
    console.log('App render');
    var _context, _article = null;
    //mode에 따라 출력되는 내용이 달라지는 if문
    if (this.state.mode === 'default') {
      console.log('default');
      _context = this.state.default.context;
      _article = <Content context = {_context} sub = {this.state.save.sub} onChangePage={set.bind(this)}></Content>
    } else if (this.state.mode === 'show') {
      console.log('show');
      var i = 0;
      while ( i < this.state.content.length) {
        var data = this.state.content[i];
        if (data.id === this.state.selected_menu) {
          _context = data.context;
          break;
        }
        i += 1;
      }
      _article = <Content context = {_context} sub = {this.state.save.sub} onChangePage={set.bind(this)}></Content>
      //아직 미완.
    } else if (this.state.mode === 'write') {
      _article = <Content context = {_context} sub = {this.state.save.sub} onChangePage={set.bind(this)}></Content>
    } else {
      _context = this.state.save.context;
      _article = <Content context = {_context} sub = {this.state.save.sub} onChangePage={set.bind(this)}></Content>
    }

    return (
      <div className="Main">
        <header className="Main-header">
          <Header
            data = {this.state.content}
            onChangePage={set.bind(this)}></Header>
        </header>
          {_article}
      </div>
    );
  }
}

//id 값에 따라 mode를 변경시켜주는 함수
function set(id){
  if (id < 1 ) {
    this.setState({
      mode : 'default',
      selected_menu : Number(id)
    });
  }
  else if (id < 3 ) {
    this.setState({
      mode : 'show',
      selected_menu : Number(id)
    });
  } else {
    this.setState({
      mode : 'save',
      selected_menu : Number(id)
    });
  }
  
};


export default App;
