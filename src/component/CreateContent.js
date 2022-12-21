// *사용자가 작성하는 화면
// - 저장 버튼을 누르면 사용자가 작성한 내용이 텍스트로 보임.

import { Component } from "react";

class CreateContent extends Component {
    render() {
        return(
            <table>
                <tr><textarea placeholder={this.props.context}></textarea></tr>
                <tr><button id="btnSave"
                    onClick={function(e){ //저장 버튼
                    e.preventDefault();
                    this.props.onChangePage(3);
                }.bind(this)}>{this.props.sub}</button></tr>
            </table>
        );
    }
}

export default CreateContent;