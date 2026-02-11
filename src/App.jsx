import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import HomeHeader from "./components/HomeHeader.jsx";
import Container from "react-bootstrap/Container";
import Carousel from "./components/Carousel.jsx";
import CarouselDesktop from "./components/CarouselDesktop.jsx";
import Profile from "./components/profile.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows.jsx";
import Details from "./components/Details.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Container fluid className="px-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeHeader />
                <Carousel search="Wars" media="d-lg-none" idtarget="#trendinNow" id="trendinNow" title="Trending Now" />
                <Carousel search="avatar" media="d-lg-none" idtarget="#watchItAgain" id="watchItAgain" title="Watch it Again" />
                <Carousel search="pirates" media="d-lg-none" idtarget="#newReleases" id="newReleases" title="New Releases" />
                <CarouselDesktop search1="Wars" search2="alien" search3="terminator" idtarget="#trendinNowDesk" id="trendinNowDesk" title="Trending Now" />
                <CarouselDesktop search1="avatar" search2="ring" search3="mission" idtarget="#watchItAgainDesk" id="watchItAgainDesk" title="Watch it Again" />
                <CarouselDesktop search1="pirates" search2="fast" search3="terminator" idtarget="#newReleasesDesk" id="newReleasesDesk" title="New Releases" />
              </>
            }
          />
          <Route path="/tvshows" element={<TVShows search="Wars" idtarget="#tvshows" id="tvshows" title="TV Shows" />} />
          <Route path="/details/:movieID" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
