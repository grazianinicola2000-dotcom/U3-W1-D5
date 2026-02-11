import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const omdbURL = "https://www.omdbapi.com/?i=tt3896198&apikey=97603a2b&s=";

const CarouselDesktop = function (props) {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  const getData = () => {
    const moviesForCarousel = [props.search1, props.search2, props.search3];

    Promise.all(
      moviesForCarousel.map((search) =>
        fetch(`${omdbURL}${search}`)
          .then((res) => res.json())
          .then((data) => data.Search),
      ),
    )
      .then((movies) => {
        setdata(movies);
        setloading(false);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="d-none d-lg-block mt-5">
      <h3>{props.title}</h3>
      <div id={props.id} className="carousel slide">
        <div className="carousel-inner">
          {loading && (
            <div className="d-flex justify-content-center gap-2 flex-nowrap">
              <div className="placeholder">
                <img src="public\placeholder.png" alt="placeholder" />
                <Spinner className="spinner" animation="border" variant="light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
              <div className="placeholder">
                <img src="public\placeholder.png" alt="placeholder" />
                <Spinner className="spinner" animation="border" variant="light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
              <div className="placeholder">
                <img src="public\placeholder.png" alt="placeholder" />
                <Spinner className="spinner" animation="border" variant="light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
              <div className="placeholder">
                <img src="public\placeholder.png" alt="placeholder" />
                <Spinner className="spinner" animation="border" variant="light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
              <div className="placeholder">
                <img src="public\placeholder.png" alt="placeholder" />
                <Spinner className="spinner" animation="border" variant="light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            </div>
          )}
          {data.map((movies, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <div className="d-flex justify-content-center gap-2 flex-nowrap">
                {movies.map((movie, i) =>
                  i < 5 ? (
                    <img
                      onClick={() => {
                        navigate("/details/" + movie.imdbID);
                      }}
                      className="movie"
                      key={movie.imdbID + i}
                      src={movie.Poster}
                    />
                  ) : null,
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={props.idtarget} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={props.idtarget} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default CarouselDesktop;
