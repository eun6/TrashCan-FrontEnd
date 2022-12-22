// * 화면 상단부 화면, 타이틀과 작성/버리기 바로 구성되어 있음.

import { Component } from 'react';
import "./Header.css";


class Header extends Component {
    render() {
        console.log('Header render');
        var lists = [];
        var data = this.props.data;
        var i = 0;
        //content에 저장된 아이템을 list에 추가하는 반복문
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
                <h1 //상단 타이틀
                    onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(0);
                }.bind(this)}>Hello, My TrashCan
                </h1>
                <nav /*아이템 리스트, [작성 | 버리기] 기능바*/>
                    <ul>
                        {lists}
                    </ul>
                </nav>
            </header>
        );
    }
}
 
export default Header;