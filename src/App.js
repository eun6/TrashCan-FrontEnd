import './App.css';
import { Component } from 'react';
import Header from "./component/Header";
import CreateContent from "./component/CreateContent";
import ReadContent from "./component/ReadContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode : 'default',
      //getValue : { getuserText : ''},
      selected_menu : 0,
      default : {id : 0, context : '안녕하세요.\n 누구에게도 말 못했던 당신의 솔직한 감정을 적어보세요. \n\n여기선 자유롭게 표현할 수 있어요. \n...금방 지워버리면 되니까요.'},
      content : [
        {id : 1, sub : 'write', context : '지금 떠오르는 생각을 아무렇게 적어보세요.'},
        {id : 2, sub : 'Trash Can', context : '작성한 내용을 버리겠습니다.'},
        {id : 3, sub : '저장하기', context : '기존 내용을 보여주겠습니다.'}
      ]
    }

  }
  /*handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      getValue: { ...this.state.getValue, [name]: value },
    });}*/

  render() {
    console.log('App render');
    var _context, _article = null;
    //mode에 따라 출력되는 내용이 달라지는 if문
    if (this.state.mode === 'default') {
      console.log('default');
      _context = this.state.default.context;
      _article = <ReadContent context = {_context}></ReadContent>
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
      _article = <ReadContent context = {_context}></ReadContent>
    } else if (this.state.mode === 'write') {
      _context = this.state.content[0].context;
      _article = <CreateContent 
                    context = {_context} sub = {this.state.content[2].sub}
                    onChangePage={setMode.bind(this)}>
                  </CreateContent>
    } else {
      _context = this.state.save.context;
      _article = <ReadContent context = {_context}></ReadContent>
    }

    return (
      <div className="Main">
        <header className="Main-header">
          <Header
            data = {this.state.content}
            onChangePage={setMode.bind(this)}></Header>
        </header>
          {_article}
      </div>
    );
  }
}

//id 값에 따라 mode를 변경시켜주는 함수
function setMode(id){
  if (id < 1 ) {
    this.setState({
      mode : 'default',
      selected_menu : Number(id)
    });
  }
  else if (id < 2 ) {
    this.setState({
      mode : 'write',
      selected_menu : Number(id)
    });
  } else if (id < 4 ) {
    this.setState({
      mode : 'show',
      selected_menu : Number(id)
    });
  }
  
};


export default App;
