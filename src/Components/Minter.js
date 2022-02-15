import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWallet,
  mintNFT
} from "../util/dapp.js";

import hero from "../util/hero.jpg"

const Minter = (props) => {
  const [status, setStatus] = useState("");
  const [walletAddress, setWallet] = useState("");
  const [mintNum, setMintNum] = useState(1);

  function changeNumTokens(n) {
    if((mintNum + n >= 1) && (mintNum + n <= 10)){
      setMintNum(mintNum + n)
    }
  }

  const onMintPressed = async (numTokens) => {
    const addressArray = await window.ethereum.request({method: 'eth_accounts'});

    if(addressArray.length > 0){
      const mintRepsonse = await mintNFT(numTokens);
      setStatus(JSON.stringify(mintRepsonse));
    }
    else{
      setStatus("Please connect your wallet.")
    }
  };

  return (
      <div className="Minter">
        <div className="minthero">
          <img src={hero} alt="hero image"/>
        </div>
        <div className="mint">
          <h1 id="numberOfTokens">
            {mintNum}
          </h1>
          <button id="addNumToken" onClick = {() => changeNumTokens(1)}>
            +
          </button>
          <button id="minusNumToken" onClick = {() => changeNumTokens(-1)}>
            -
          </button>
          <button id="mintButton" onClick = {() => onMintPressed(mintNum)}>
            Mint NFT
          </button>
          <h2 id="status">
            {status}
          </h2>
        </div>
      </div>
  );
};

export default Minter;
