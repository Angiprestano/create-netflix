import { React, Component } from "react";
import { Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

class MyFilm2 extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=695ba77a&s=lord of the rings")
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
        :<h3 className="ms-2 mb-4 text-white">The Lord of the Rings</h3>
        <Row className="ms-2">
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
export default MyFilm2;
