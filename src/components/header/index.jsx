import "./index.css";
import { Row, Col, Menu } from "antd";
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import { renderRoutes } from "react-router-config";
// import routes from "../../router";
const style = {
  size: {
    width: "100%",
    height: "20%",
  },
  state: {
    current: "homePage",
  },
};
class Header extends Component {
  render() {
    return (
      <div className="Header" style={style.size}>
        <div className="Headermain">
          <Row>
            <Col span={8}>
              <h2 className="logtext">Li</h2>
            </Col>
            <Col span={8} offset={8}>
              <div className="headerbox">
                <Menu
                  defaultSelectedKeys={[style.state.current]}
                  onClick={handleClick}
                  selectedKeys={[style.state.current]}
                  mode="horizontal"
                  selectable="true"
                  style={{ backgroundColor: "rgba(0,0,0,0)" }}
                >
                  <Menu.Item  key="homePage"><Link style={{color:'#fff'}} className="homePage" to='/'>首页</Link></Menu.Item>
                  <Menu.Item key="myblog"><Link  style={{color:'#fff'}} className="myblog" to='/myblog'>博客</Link></Menu.Item>
                  <Menu.Item key="live">生活</Menu.Item>
                </Menu>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
    function handleClick(e) {
      style.state.current = e.key;
    }
  }
}

export default Header;
