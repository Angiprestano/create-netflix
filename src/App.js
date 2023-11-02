import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHome from "./Components/MyHome";
import MyFilm from "./Components/MyFilm";
import MyFilm2 from "./Components/MyFilm2";
import MyFilm3 from "./Components/MyFilm3";
import MyFilm4 from "./Components/MyFilm4";
import MyFooter from "./Components/MyFooter";
import TvShow from "./Components/TvShow";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-dark">
      <header>
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/tvshow" element={<TvShow />} />
          </Routes>
          <MyHome />
          <MyFilm />
          <MyFilm2 />
          <MyFilm3 />
          <MyFilm4 />
        </BrowserRouter>
        <MyFooter />
      </header>
    </div>
  );
}

export default App;
