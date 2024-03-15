import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Edit } from "./pages/Edit";
import { Nationalities } from "./pages/Nationalities";
import { Players } from "./pages/Players";
import { Teams } from "./pages/Teams";
import { Navigation } from "./components/Navigation";
import { NationalityForm } from "./pages/NationalityForm";
import { Toaster } from "react-hot-toast";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Tech } from "./pages/Tech";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/nationalities" element={<Nationalities />} />
        <Route path="/nationalities/:id" element={<NationalityForm />} />
        <Route path="/nationality_form" element={<NationalityForm />} />
        <Route path="/technicians" element={<Tech />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
