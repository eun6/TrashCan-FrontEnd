import './App.css';
import React, { Component } from 'react';
import Header from "./component/Header";
import CreateContent from "./component/CreateContent";
import ReadContent from "./component/ReadContent";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data : null,
      mode : 'default',
      selected_menu : 0,
      default : {id : 0, context : '안녕하세요.\n 누구에게도 말 못했던 당신의 솔직한 감정을 적어보세요. \n\n여기선 자유롭게 표현할 수 있어요. \n...금방 지워버리면 되니까요.'},
      content : [
        {id : 1, sub : 'write', context : ''},
        {id : 2, sub : 'Trash Can', context : '작성한 내용을 버리겠습니다.'}
      ]
    }
  }

  //시작하자마자 실행되는 함수
  componentDidMount() {
  }

  //서버에서 작성된 정보 불러오는 함수
  getReadServerData(e) {
    axios.get('/read')
    .then(response => this.setState({Data : response.data.data}))
    .then(response => console.log(this.state.Data))
    .catch(err=> console.log("[읽기] 통신 오류", err))
  }


  //id가 state의 content id 값과 동일하면 data 반환하는 핸들러
  getReadContent(){
    var i = 0;
      while ( i < this.state.content.length) {
        var data = this.state.content[i];
        if (data.id === this.state.selected_menu) {
          return data;
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

    } else if (this.state.mode === 'read') {
      console.log('read');
      
      _context = this.state.Data;
      _article = <ReadContent context = {_context}></ReadContent>

    } else if (this.state.mode === 'write') {
      _context = this.getReadContent();
      console.log('write', _context);
      _article = <CreateContent
                //mode를 "read"로 바꾸고 서버에 정보 요청.
                  onSubmit={function(e){
                    this.setState({
                      mode : "read",
                      selected_menu : 2
                    });
                    this.getReadServerData(e);
                  }.bind(this)}>
                  </CreateContent>
    } else if (this.state.mode === 'trash') {
      axios.post('/trash', { data : this.state.context})
      .then(response => console.log(response.data.responseMessage))
      .catch(err=>{console.log("[저장] 통신 오류", err)})
      console.log(this.state.context);
    } else {
      _context = '예상치 못한 mode 값입니다.';
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
      mode : 'read',
      selected_menu : Number(id)
    });
  } else if (id <4) {
    this.setState({
      mode : 'trash',
      selected_menu : Number(id)
    });
  }
  
};


export default App;
