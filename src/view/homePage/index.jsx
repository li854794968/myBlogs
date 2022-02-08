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
      <div class="space">
        <div class="stars">
          <div class="star"></div>
          <div class="star pink"></div>
          <div class="star blue"></div>
          <div class="star yellow"></div>
        </div>
      </div>
      <Header></Header>
      <Main></Main>
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer> */}
    </div>
  );
}

export default homePage;
