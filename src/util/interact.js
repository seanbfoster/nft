import Web3 from "web3";

require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("../contract-abi.json");
const contractAddress = "0xC73B2C2A555F845796A42c69B5b6Bc21394929A1";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3alch = createAlchemyWeb3(alchemyKey);

import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();


export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Wallet Connected",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "Error: " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: "Install Metamask"
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Wallet Connected",
        };
      } else {
        return {
          address: "",
          status: "Connect your wallet",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "Error: " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: "Install Metamask"
    };
  }
};

async function loadContract() {
  return new web3alch.eth.Contract(contractABI, contractAddress);
}

export const mintNFT = async (quantity) => {

  alert(ethereum.isConnected())

}
  // const mintPrice = Web3.utils.toWei('.07', 'ether')
  
  // window.contract = await new web3alch.eth.Contract(contractABI, contractAddress);

  // const transactionParameters = {
  //   to: contractAddress, // Required except during contract publications.
  //   from: window.ethereum.selectedAddress, // must match user's active address.
  //   value: Web3.utils.toHex(mintPrice * quantity),
  //   'data': window.contract.methods.mintTeslaBot(1).encodeABI() //make call to NFT smart contract 
  // };

  // try {
  //   const txHash = await window.ethereum.request({
  //     method: "eth_sendTransaction",
  //     params: [transactionParameters],
  //   });
  //   return {
  //     success: true,
  //     status:
  //       "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
  //       txHash,
  //   };
  // } catch (error) {
  //   alert(error.message)
  //   return {
  //     success: false,
  //     status: "Error: " + error.message,
  //   };
