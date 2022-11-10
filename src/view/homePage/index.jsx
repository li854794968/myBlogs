import Background from "../../image/demo.jpg";
import './index.css'
import Header from "../../components/header/index"
import Main from "../../components/main/index";

const style = {
  bgd: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "100%,100%",
  },
};
function homePage() {
  return (
    <div className="homepage" style={style.bgd}>
      <div className="space">
        <div className="stars">
          <div className="star"></div>
          <div className="star pink"></div>
          <div className="star blue"></div>
          <div className="star yellow"></div>
        </div>
      </div>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default homePage;
