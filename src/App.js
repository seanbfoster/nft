import './App.css';

import Header from './Components/Header'
import Minter from './Components/Minter'
import About from './Components/About'
import Roadmap from './Components/Roadmap'
import Team from './Components/Team'
import Home from './Components/Home'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { useEffect, useState } from "react";

function App() {

  const [status, setStatus] = useState("");
  const [walletAddress, setWallet] = useState("");
  const [mintNum, setMintNum] = useState(1);

  return (
      <div className="App">
        <Header></Header>
        <div className="thing"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Minter />} />
          <Route path="/about" element={<About />}/>
          <Route path="/roadmap" element={<Roadmap />}/>
          <Route path="/team" element={<Team />}/>
        </Routes>
      </div>
  );
}

export default App;
