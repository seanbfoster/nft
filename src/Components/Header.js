import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  connectWallet,
  getCurrentWallet,
  mintNFT
} from "../util/dapp.js";

import twitter from "../util/twitter-brands.svg";
import discord from "../util/discord-brands.svg";
import opensea from "../util/opensea.svg"
import bars from "../util/bars-solid.svg"

const Header = (props) => {
  const [status, setStatus] = useState("");
  const [walletAddress, setWallet] = useState("");
  const [mintNum, setMintNum] = useState(1);
  const [showLinks, setShowLinks] = useState(true)

  useEffect(async () => {
    const { status, address } = await getCurrentWallet();
    setStatus(status);
    setWallet(address);
    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Wallet Connected");
        } else {
          setWallet("");
          setStatus("Connect using Metamask");
        }
      });
    } else {
      setStatus("Install Metamask");
    }
  }

  const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWallet(walletResponse.address);
  };
  
  const linkStyle = {
    "text-decoration": "none"
  }

  function toggleMobileMenu() {
    setShowLinks(!showLinks);
  }

  return(
    <div className="Header-container">
      <div className="Header">
        <div className="header-left">
          {/* <Link style={linkStyle} to="/"><h1>Cosmic Darlings</h1></Link> */}
          <Link style={linkStyle} to="/about"><h2>About</h2></Link>
          <Link style={linkStyle} to="/roadmap"><h2>Roadmap</h2></Link>
          <Link style={linkStyle} to="/team"><h2>Team</h2></Link>
        </div>
        <div className="mobile-menu" id={showLinks ? "hidden" : ""}>
          <div className="menu-links">
            {/* <Link style={linkStyle} to="/"><h1>Cosmic Darlings</h1></Link> */}
            <Link style={linkStyle} to="/about"><h2>About</h2></Link>
            <Link style={linkStyle} to="/roadmap"><h2>Roadmap</h2></Link>
            <Link style={linkStyle} to="/team"><h2>Team</h2></Link>
            <button id="close-menu" onClick={toggleMobileMenu}>X</button>
          </div>
        </div>
        <a id="mobile-toggle" onClick={toggleMobileMenu}><img src={bars} alt="Kiwi standing on oval"/></a>
        <div className="header-right">
          {/* <a href="https://www.opensea.io"><img src={opensea} alt="Kiwi standing on oval"/></a> */}
          <a href="https://www.twitter.com"><img src={twitter} alt="Kiwi standing on oval"/></a>
          <a href="https://www.discord.com"><img src={discord} alt="Kiwi standing on oval"/></a>
          <button id="walletButton" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? (
              "Connected: " +
              String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)
              ) : (
              "Connect Wallet"
            )}
          </button>
        </div>
      </div>
    </div>
    )
}

export default Header;