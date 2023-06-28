import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import "./scss/reset.css";
import Home from "./components/Home/Home.jsx";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/logowanie" element={<SignIn />} />;
          <Route path="/rejestracja" element={<SignUp />} />;
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
