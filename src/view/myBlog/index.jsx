import React, { Component } from 'react';
import './index.css'
import Header from '../../components/header/index'
class myblog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 进行变量定义（会vue的同学：这个地方就相当于 data 的return里所定义的）
            // 例如
            name: '定义name'
        };
        // this.listRef = React.createRef();
    }


    render() {
        return (
            <div className='myblogPage'>
                <Header></Header>

                <div className='content-body' onClick={this.confirm}>
                    {this.state.name}
                </div>

            </div>
        )
    }
    confirm = () => {
        this.props.history.push('/lifeRecord')
    }

}
export default myblog