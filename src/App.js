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
      selected_menu : 0,
      default : {id : 0, context : '안녕하세요.\n 누구에게도 말 못했던 당신의 솔직한 감정을 적어보세요. \n\n여기선 자유롭게 표현할 수 있어요. \n...금방 지워버리면 되니까요.'},
      content : [
        {id : 1, sub : 'write', context : ''},
        {id : 2, sub : 'Trash Can', context : '작성한 내용을 버리겠습니다.'}
      ]
    }
  }

  //id가 state의 content id 값과 동일하면 data 반환하는 핸들러
  getReadContent(){
    var i = 0;
      while ( i < this.state.content.length) {
        var data = this.state.content[i];
        if (data.id === this.state.selected_menu) {
          return data;
          break;
        }
        i += 1;
      }
  }

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
      var _context = this.getReadContent();
      _article = <ReadContent context = {_context.context}></ReadContent>
    } else if (this.state.mode === 'write') {
      _context = this.getReadContent();
      console.log('리로드 전 write', _context);
      _article = <CreateContent 
                    data = {_context}
                    onSubmit={function(_id, _sub, _contexts){
                      var contents = Array.from(this.state.content);
                      var i = 0;
                      while(i < contents.length) {
                        if(contents[i].id === _id) {
                          contents[i] = {id : _id, sub : _sub, context : _contexts}
                          break;
                        }
                        i += 1;
                      }
                      console.log('복제본', contents);
                      this.setState({
                        mode : 'show',
                        content : contents
                      });
                      console.log(this.state.content);
                    }.bind(this)}>
                  </CreateContent>
    } else {
      _context = '^^';
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
  } else if (id < 3 ) {
    this.setState({
      mode : 'show',
      selected_menu : Number(id)
    });
  }
  
};


export default App;
