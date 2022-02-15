import Web3 from "web3";

const contractABI = require("../contract-abi.json");
const contractAddress = "0xC73B2C2A555F845796A42c69B5b6Bc21394929A1";

export const connectWallet = async () => {
    
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({method: 'eth_requestAccounts'});

            return {
                status: "wallet connected",
                address: addressArray[0]
            }
        }
        catch (err) {
            return {
                status: err.message,
                address: ""
            }
        }
    }

    else {
        return {
            status: "Wallet not detected",
            address: ""
        }
    }
}

export const getCurrentWallet = async () => {
    if(window.ethereum){
        try {
            const addressArray = await window.ethereum.request({method: 'eth_accounts'});
            
            if(addressArray.length > 0) {
                return {
                    status: "wallet connected",
                    address: addressArray[0]
                }
            }

            else {
                return {
                    status: "please connect your wallet",
                    address: ""
                }
            }
        }

        catch (err){
            return {
                status: err.message,
                address: ""
            }
        }
    }
    else{
        return {
            status: "",
            wallet: "Wallet not detected"
        }
    }
}

export const mintNFT = async (numTokens) => {

    const mintPrice = Web3.utils.toWei('.07', 'ether')

    var web3 = new Web3(Web3.givenProvider)

    window.contract = new web3.eth.Contract(contractABI, contractAddress)

    const transactionParameters = {
        to: contractAddress,
        from: window.ethereum.selectedAddress, // must match user's active address.
        value: Web3.utils.toHex(mintPrice * numTokens),
        'data': window.contract.methods.mintTeslaBot(numTokens).encodeABI() //make call to NFT smart contract 
    }

    try {
        const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
        })
        return {
            success: true,
            status: txHash,
        }
    }

    catch(error) {
        // success: false,
        // status: error.message,
    }
    
}