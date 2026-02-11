import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const omdbURL = "https://www.omdbapi.com/?i=tt3896198&apikey=97603a2b&s=";

const TVShows = function (props) {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const getData = () => {
    fetch(`${omdbURL}${props.search}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recuper dei Dati");
        }
      })
      .then((data) => {
        console.log(data.Search);
        setdata(data.Search);
        setloading(false);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    getData();
  }, [props.search]);

  return (
    <section className={`row ${props.media} mt-5 justify-content-center`}>
      <h3>{props.title}</h3>
      <div id={props.id} className="carousel slide col-6 p-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {data.map((movie, i) => {
            return (
              <button
                key={movie.imdbID + i}
                type="button"
                data-bs-target={props.idtarget}
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-label={`Slide ${i + 1}`}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {loading && (
            <div className="placeholder">
              <img src="public\placeholder.png" alt="placeholder" />
              <Spinner className="spinner" animation="border" variant="light" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {data.map((movie, i) => {
            return (
              <div key={movie.imdbID + i}>
                <div className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <img
                    src={movie.Poster}
                    onClick={() => {
                      navigate("/details/" + movie.imdbID);
                    }}
                    className="movie d-block m-auto"
                    alt="movie"
                  />
                </div>
              </div>
            );
          })}
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
export default TVShows;
