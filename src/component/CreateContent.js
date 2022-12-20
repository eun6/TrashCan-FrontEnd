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