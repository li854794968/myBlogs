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
    current: "",
  },
};
class Header extends Component {
  
  render() {
    const path = style.state.current;
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
                  selectedKeys={[path]}
                  mode="horizontal"
                  selectable="true"
                  style={{ backgroundColor: "rgba(0,0,0,0)" }}
                >
                  {/* <Link className="homePage" to='/'><Menu.Item  key="home">首页</Menu.Item></Link> */}
                  <Menu.Item  key="home"><Link style={{color:'#fff'}} className="homePage" to='/'>首页</Link></Menu.Item>
                  <Menu.Item key="blogs"><Link  style={{color:'#fff'}} className="myblog" to='/myblog'>博客</Link></Menu.Item>
                  <Menu.Item key="live">生活</Menu.Item>
                  <Menu.Item key="relation">联系</Menu.Item>
                  <Menu.Item key="aboutMe">关于</Menu.Item>

                </Menu>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
    function handleClick(e) {
      console.log(e.key);
      style.state.current = e.key;

      console.log(style.state.current);
      //    setStyle.state({ current: e.key })
      console.log("click ");
    }
  }
}

// function Header() {
//   function handleClick(e) {
//     console.log(e.key);
//     style.state.current = e.key;

//     console.log(style.state.current);
//     //    setStyle.state({ current: e.key })
//     console.log("click ");
//   }
//   const path = style.state.current;
//   return (

//   );
// }

export default Header;
