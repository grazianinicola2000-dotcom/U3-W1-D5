import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const omdbURL = "https://www.omdbapi.com/?apikey=97603a2b&i=";

const Details = function () {
  const params = useParams();

  const [data, setdata] = useState([]);

  const getData = () => {
    fetch(`${omdbURL}${params.movieID}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recuper dei Dati");
        }
      })
      .then((data) => {
        setdata(data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    getData();
    console.log(data);
  }, [params]);

  return (
    <Container className="justify-content-center">
      <Row className="justify-content-center">
        <Col xs={12} xl={3}>
          <img src={data.Poster} alt="Poster" />
        </Col>
        <Col xs={12} xl={5}>
          <h3 className="mb-3">{data.Title}</h3>
          <div className="text-light d-flex align-items-baseline gap-2">
            <h5 className="m-0 p-0">Director:</h5>
            <p className="m-0 p-0">{data.Director}</p>
          </div>
          <div className="text-light d-flex align-items-baseline gap-2">
            <h5 className="m-0 p-0">Actors:</h5>
            <p className="m-0 p-0">{data.Actors}</p>
          </div>
          <div className="text-light d-flex align-items-baseline gap-2">
            <h5 className="m-0 p-0">Genre:</h5>
            <p className="m-0 p-0">{data.Genre}</p>
          </div>
          <div className="text-light d-flex align-items-baseline gap-2">
            <h5 className="m-0 p-0">Awards:</h5>
            <p className="m-0 p-0">{data.Awards}</p>
          </div>

          <div className="text-light d-flex align-items-baseline gap-2">
            <h5 className="m-0 p-0">Year:</h5>
            <p className="m-0 p-0">{data.Year}</p>
          </div>
          <div className="text-light d-flex align-items-baseline gap-2">
            <h5 className="m-0 p-0">Runtime :</h5>
            <p className="m-0 p-0">{data.Runtime}</p>
          </div>
          <div className="text-light d-flex align-items-baseline gap-2">
            <h5 className="m-0 p-0">Rating:</h5>
            <p className="m-0 p-0">{data.imdbRating}</p>
          </div>
          <div className="text-light d-flex align-items-baseline gap-2">
            <h5 className="m-0 p-0">Box office:</h5>
            <p className="m-0 p-0">{data.BoxOffice}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
