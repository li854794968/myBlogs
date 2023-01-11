import React, { Component } from 'react';
import './index.css'
import Header from '../../components/header/index'
class lifeRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 进行变量定义（会vue的同学：这个地方就相当于 data 的return里所定义的）
      // 例如
      name: '陈鑫是个傻蛋'
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

}
export default lifeRecord