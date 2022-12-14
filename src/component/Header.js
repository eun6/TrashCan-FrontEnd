import { Component } from 'react';
import "./Header.css";


class Header extends Component {
    render() {
        console.log('Header render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(<li key={data[i].id}>
                <a
                href = {'/header/' + data[i].id}
                data-id = {data[i].id}
                onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                >{data[i].sub}</a>
            </li>);
            i += 1;
        }
        return(
            <header>
                <h1 onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(0);
                }.bind(this)}>Hello, My TrashCan</h1>
                <nav>
                    <ul>
                        {lists}
                    </ul>
                </nav>
            </header>
        );
    }
}
 
export default Header;