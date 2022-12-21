// * 사용자가 작성한 내용 혹은 기본 설정된 내용을 ReadOnly로 보여줌.

import { Component } from "react";

class ReadContent extends Component {
    render() {
        return(
            <h2>{this.props.context}</h2>
        );
    }
}

export default ReadContent;