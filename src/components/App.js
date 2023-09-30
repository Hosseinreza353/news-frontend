import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../layouts/Header";
import HomeScreen from "../screens/HomeScreen";
import NewsDetail from "../screens/NewsDetail";

export default function () {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/news/:id" element={<NewsDetail />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}
