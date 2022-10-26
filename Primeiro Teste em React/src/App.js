import "./styles.css";
import Home from "./Home";
import Breeds from "./Breeds";
import About from "./About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav class="menu">
          <div class="logoContainer">
            <img src="/images/logo.png" alt="logo do site" class="logo" />
            <img src="/images/dogin.png" alt="Dogin" class="logoName" />
          </div>
          <div class="menuOpts">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/breeds">Raças</Link>
              </li>
              <li>
                <Link to="/about">Sobre nós</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
