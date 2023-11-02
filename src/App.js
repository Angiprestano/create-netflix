import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHome from "./Components/MyHome";
import MyFilm from "./Components/MyFilm";
import MyFilm2 from "./Components/MyFilm2";
import MyFilm3 from "./Components/MyFilm3";
import MyFilm4 from "./Components/MyFilm4";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div className="bg-dark">
      <header>
        <MyNavbar />
        <MyHome />
        <MyFilm />
        <MyFilm2 />
        <MyFilm3 />
        <MyFilm4 />
        <MyFooter />
      </header>
    </div>
  );
}

export default App;
