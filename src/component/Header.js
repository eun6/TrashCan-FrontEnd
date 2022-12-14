import { Component } from 'react';
import "./Header.css";


class Header extends Component {
    render() {
        return(
            <header>
                <h1>Hello, My TrashCan</h1>
                <nav>
                    <ul>
                        <li><a href='/'>wirte</a></li>
                        <li><a href='/'>Trash Can</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
 
export default Header;