import "./App.css";
import Background from "./image/demo.jpg";
import Header from "./components/header/index";
import Main from "./components/main/index";
import Footer from "./components/footer/index";

const style = {
  bgd: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "100%,100%",
  },
};
function App() {
  return (
    <div className="App" style={style.bgd}>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
