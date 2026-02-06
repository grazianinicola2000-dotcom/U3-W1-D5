import { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <section className="text-secondary fw-light" style={{ backgroundColor: "#221F1F" }}>
        <div className="row m-0 p-0">
          <div className="d-none d-lg-inline col-lg-3"></div>

          <h1 className="fs-95 border-bottom ms-3 me-3 mb-5 col-12 col-lg-6 fw-normal" style={{ color: "#f8f9fa" }}>
            Edit Profile
          </h1>

          <div className="d-none d-lg-inline col-lg-3"></div>

          <section className="d-flex justify-content-center row col-12 col-lg-6 p-0 m-0">
            <div className="col-lg-4 m-0 p-0 d-lg-inline d-none">
              <img src="public\avatar.png" className="w-100" alt="avatar" />
            </div>

            <div className="col-12 m-0 p-0 d-lg-none">
              <img src="public\avatar.png" className="mx-3 mb-2" style={{ width: "50%" }} alt="avatar" />
            </div>

            <div className="flex-grow-1 col-lg-8">
              <h3 className="fs-4 py-3 ps-3 fw-light" style={{ backgroundColor: "#666666" }}>
                Graziani Nicola
              </h3>

              <div className="mt-4 pb-3 border-bottom" style={{ color: "#f8f9fa" }}>
                <h3 className="fs-3 text-light fw-light">Language:</h3>

                <button
                  className="btn dropdown-toggle text-light py-0 border border-2 rounded-0 fw-light"
                  style={{
                    backgroundColor: "#221F1F",
                    color: "#f8f9fa",
                  }}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  English
                </button>

                <ul className="dropdown-menu" style={{ backgroundColor: "#221F1F" }}>
                  <li>
                    <a className="link-light text-decoration-none fs-5 fw-light p-4" href="#">
                      Italian
                    </a>
                  </li>
                  <li>
                    <a className="link-light text-decoration-none fs-5 fw-light p-4" href="#">
                      German
                    </a>
                  </li>
                  <li>
                    <a className="link-light text-decoration-none fs-5 fw-light p-4" href="#">
                      Spanish
                    </a>
                  </li>
                </ul>
              </div>

              <div className="border-bottom pb-3 mt-4" style={{ color: "#f8f9fa" }}>
                <h3 className="fs-3 text-light fw-light">Maturity Settings:</h3>

                <div className=" p-1 d-inline-block" style={{ backgroundColor: "#666666" }}>
                  ALL MATURITY RATINGS
                </div>

                <p>Show titles of all maturity ratings for this profile</p>

                <button
                  className="btn py-1 px-3 border border-2 rounded-0 fs-8 fw-light ls-3"
                  style={{
                    backgroundColor: "#221F1F",
                    color: "#f8f9fa",
                  }}
                >
                  EDIT
                </button>
              </div>

              <div className="border-bottom pb-3 mt-4" style={{ color: "#f8f9fa" }}>
                <h3 className="fs-3 text-light fw-light">Autoplay controls</h3>

                <div className="d-flex align-items-center mt-1 gap-1">
                  <button
                    className="btn p-1 border rounded-0 fs-8 fw-light"
                    style={{
                      backgroundColor: "#221F1F",
                      color: "#f8f9fa",
                    }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <p className="m-0 text-light">Autoplay next episode in a series on all devices.</p>
                </div>

                <div className="d-flex align-items-center mt-1 gap-1">
                  <button
                    className="btn p-1 border rounded-0 fs-8 fw-light"
                    style={{
                      backgroundColor: "#221F1F",
                      color: "#f8f9fa",
                    }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <p className="m-0 text-light">Autoplay previews while browsing on all devices.</p>
                </div>
              </div>

              <div className="d-flex gap-2 pb-3 mt-4">
                <button
                  className="btn py-1 px-3 border border-2 rounded-0 fs-8 fw-light ls-3"
                  style={{ backgroundColor: "#221F1F", color: "#f8f9fa", borderColor: "#f8f9fa" }}
                >
                  SAVE
                </button>

                <button
                  className="btn py-1 px-3 border border-2 rounded-0 fs-8 fw-light ls-3"
                  style={{ backgroundColor: "#221F1F", color: "#f8f9fa", borderColor: "#f8f9fa" }}
                >
                  CANCEL
                </button>

                <button
                  className="btn py-1 px-3 border border-2 rounded-0 fs-8 fw-light ls-3"
                  style={{ backgroundColor: "#221F1F", color: "#f8f9fa", borderColor: "#f8f9fa" }}
                >
                  DELETE PROFILE
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Profile;
