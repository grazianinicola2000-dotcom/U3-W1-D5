import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import HomeHeader from "./components/HomeHeader.jsx";
import Container from "react-bootstrap/Container";
import Carousel from "./components/Carousel.jsx";
import CarouselDesktop from "./components/CarouselDesktop.jsx";

import "./App.css";

function App() {
  return (
    <>
      <MyNav />
      <main>
        <Container fluid className="px-4">
          <HomeHeader />
          <Carousel search="Wars" idtarget="#trendinNow" id="trendinNow" title="Trending Now" />
          <Carousel search="avatar" idtarget="#watchItAgain" id="watchItAgain" title="Watch it Again" />
          <Carousel search="pirates" idtarget="#newReleases" id="newReleases" title="New Releases" />
          <CarouselDesktop search1="Wars" search2="alien" search3="terminator" idtarget="#trendinNowDesk" id="trendinNowDesk" title="Trending Now" />
          <CarouselDesktop search1="avatar" search2="ring" search3="mission" idtarget="#watchItAgainDesk" id="watchItAgainDesk" title="Watch it Again" />
          <CarouselDesktop search1="pirates" search2="fast" search3="terminator" idtarget="#newReleasesDesk" id="newReleasesDesk" title="New Releases" />
        </Container>
      </main>
      <MyFooter />
    </>
  );
}

export default App;
