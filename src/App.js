import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHome from "./Components/MyHome";
import MyFilm from "./Components/MyFilm";

function App() {
  return (
    <div>
      <header>
        <MyNavbar />
        <MyHome className="bg-dark" />
        <MyFilm />
      </header>
    </div>
  );
}

export default App;
