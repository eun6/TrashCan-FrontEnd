// *사용자가 작성하는 화면
// - 저장 버튼을 누르면 사용자가 작성한 내용이 텍스트로 보임.

import React, { Component } from "react";

class CreateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.data.id,
            sub : this.props.data.sub,
            context : this.props.data.context
        }
        this.textareaHandler = this.textareaHandler.bind(this);
    }
    textareaHandler(e){
        this.setState({
            context : e.target.value //[e.target.name] : ~ 으로 변경해서 쓸 수 있음.
        });
    }

    render() {
        console.log('CreateContent render', this.state.context);
        return(
            <form action='/create_process' method='post'>
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
                    this.props.onSubmit(
                        this.state.id,
                        this.state.sub,
                        this.state.context);
                    }.bind(this)}
                    >저장하기
                </button>
            </form>
        );
    }
}

export default CreateContent;