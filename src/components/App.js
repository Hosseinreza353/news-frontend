import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../layouts/Header";
import HomeScreen from "../views/Home";
import NewsScreen from "../views/Article";

export default function () {
  return (
    <Router>
      <Header />
      <main className="p-0">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/news/:id" element={<NewsScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}
