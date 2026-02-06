import { Component } from "react";
import { Spinner } from "react-bootstrap";

const omdbURL = "https://www.omdbapi.com/?i=tt3896198&apikey=97603a2b&s=";

class Carousel extends Component {
  state = {
    data: [],
    loading: true,
  };

  getData = () => {
    fetch(`${omdbURL}${this.props.search}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recuper dei Dati");
        }
      })
      .then((data) => {
        console.log(data.Search);
        this.setState({
          data: data.Search,
          loading: false,
        });
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <section className="row d-lg-none mt-5">
        <h3>{this.props.title}</h3>
        <div id={this.props.id} className="carousel slide col-12 p-4" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {this.state.data.map((movie, i) => {
              return (
                <button
                  key={movie.imdbID + i}
                  type="button"
                  data-bs-target={this.props.idtarget}
                  data-bs-slide-to={i}
                  className={i === 0 ? "active" : ""}
                  aria-label={`Slide ${i + 1}`}
                ></button>
              );
            })}
          </div>
          <div className="carousel-inner">
            {this.state.loading && (
              <div className="placeholder">
                <img src="public\placeholder.png" alt="placeholder" />
                <Spinner className="spinner" animation="border" variant="light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
            {this.state.data.map((movie, i) => {
              return (
                <div key={movie.imdbID + i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <img src={movie.Poster} className="movie d-block m-auto" alt="movie" />
                </div>
              );
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={this.props.idtarget} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={this.props.idtarget} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    );
  }
}

export default Carousel;
