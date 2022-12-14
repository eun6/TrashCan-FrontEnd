import { Component } from "react";

class Content extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.context}</h2>
                <button onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(3);
                }.bind(this)}>{this.props.sub}</button>
            </div>
        );
    }
}

export default Content;