import { Component } from "react";

class ReadContent extends Component {
    render() {
        return(
            <h2>{this.props.context}</h2>
        );
    }
}

export default ReadContent;