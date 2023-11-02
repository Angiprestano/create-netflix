import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

class MyFilm extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=695ba77a&s=harry%20potter")
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw new Error("Error");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isError: true, isLoading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.isError && (
          <p>C'è stato un errore durante il recupero dei dati.</p>
        )}
        :<h1 className="ms-5">Tv show</h1>
        <Row>
          {this.state.movies.map((movies) => (
            <SingleCard
              key={movies.imdID}
              title={movies.Title}
              poster={movies.Poster}
            />
          ))}
        </Row>
      </div>
    );
  }
}
export default MyFilm;
