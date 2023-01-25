
// *사용자가 작성하는 화면
// - 저장 버튼을 누르면 사용자가 작성한 내용이 텍스트로 보임.

import axios from 'axios';
import React, { Component } from "react";

class CreateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            context : this.props.context
        }
        this.textareaHandler = this.textareaHandler.bind(this);
    }
    textareaHandler(e){
        this.setState({
            context : e.target.value //[e.target.name] : ~ 으로 변경해서 쓸 수 있음.
        });
    }
    //저장하기 버튼 눌렀을때 서버 통신
    SaveInfo(e){
        console.log(this.state.context);
        axios.post('/save', {
            context : this.state.context
        }).then(response => console.log(response.data.responseMessage))
        .catch(err=>{console.log("[저장] 통신 오류")})
    }

    render() {
        console.log('CreateContent render', this.state.context);
        return(
            <form action='/save' method='post'>
                <textarea
                    name = 'context'
                    placeholder = '지금 떠오르는 생각을 아무렇게 적어보세요.'
                    onChange = {this.textareaHandler}
                    >
                </textarea>
                <button
                    type='submit'
                    id="btnSave"
                    onClick = {function(e){ //저장 버튼
                    e.preventDefault();
                    this.SaveInfo(e); //서버에 정보 보내는 함수
                    this.props.onSubmit(e)}.bind(this)} //제출 시 main으로 넘어가서 동작하는 함수
                    >저장하기
                </button>
            </form>
        );
    }
}

export default CreateContent;