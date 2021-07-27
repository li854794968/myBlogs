import "./index.css";
import { Row, Col, Menu } from "antd";
const style = {
  size: {
    width: "100%",
    height: "20%",
  },
  state: {
    current: "",
  },
  headerList: [
    { title: "首页", key: "home" },
    { title: "博客", key: "blogs" },
    { title: "关于", key: "aboutMe" },
    { title: "生活", key: "live" },
    { title: "联系", key: "relation" },
  ],
};

function Header() {
  function handleClick(e) {
    console.log(e.key);
    style.state.current = e.key;

    console.log(style.state.current);
    //    setStyle.state({ current: e.key })
    console.log("click ");
  }
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
                <Menu.Item key="home">首页</Menu.Item>
                <Menu.Item key="blogs">博客</Menu.Item>
                <Menu.Item key="live">生活</Menu.Item>
                <Menu.Item key="relation">联系</Menu.Item>
                <Menu.Item key="aboutMe">关于</Menu.Item>

              </Menu>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
