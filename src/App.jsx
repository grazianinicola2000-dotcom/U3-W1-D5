import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import HomeHeader from "./components/HomeHeader.jsx";
import Container from "react-bootstrap/Container";

import "./App.css";

function App() {
  return (
    <>
      <MyNav />
      <Container fluid className="px-4">
        <HomeHeader />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
