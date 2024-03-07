import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nationalities } from "./pages/Nationalities";
import { Players } from "./pages/Players";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nationalities" element={<Nationalities />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
