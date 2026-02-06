import { Component } from "react";

const omdbURL = "https://www.omdbapi.com/?i=tt3896198&apikey=97603a2b&s=";

class CarouselDesktop extends Component {
  state = {
    data: [],
  };

  getData = () => {
    const moviesForCarousel = [this.props.search1, this.props.search2, this.props.search3];

    Promise.all(
      moviesForCarousel.map((search) =>
        fetch(`${omdbURL}${search}`)
          .then((res) => res.json())
          .then((data) => data.Search),
      ),
    )
      .then((movies) => {
        console.log(movies);
        this.setState({
          data: movies,
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
      <section className="d-none d-lg-block mt-5">
        <h3>{this.props.title}</h3>
        <div id={this.props.id} className="carousel slide">
          <div className="carousel-inner">
            {this.state.data.map((movies, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                <div className="d-flex justify-content-center gap-2 flex-nowrap">
                  {movies.map((movie, i) => (i < 5 ? <img key={movie.imdbID + i} src={movie.Poster} /> : null))}
                </div>
              </div>
            ))}
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

export default CarouselDesktop;
