import { Image } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LaunchList } from "./Components/LaunchList";
import { LaunchDetails } from "./Components/LaunchDetails";
import Logo from "../src/Assets/Logo.png";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo-container">
          <Image w="sm" src={Logo} alt="SpaceX Logo" />
        </div>
        <div className="go-to-official-site">
          <a
            href="https://www.spacex.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Official Page
          </a>
        </div>
      </div>
      <Routes>
        <Route path="/SpaceX" element={<LaunchList />} />
        <Route path="/launches/:launchId" element={<LaunchDetails />} />
      </Routes>
    </div>
  );
}

export default App;
