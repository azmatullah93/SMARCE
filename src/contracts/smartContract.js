

import { ethers } from 'ethers';
import contractABI from './SupplyChain.json'; // Update this path

const abi = contractABI.abi;
const contractAddress = '0x5B71964D6b2e1f7f9CDAC032c44d6AFDB705fc0c';

const nodeUrl = 'https://rpc.testnet.fantom.network'; 

class SmartContractService {
  constructor() {
    this.nodeProvider = new ethers.JsonRpcProvider(nodeUrl);
    this.nodeContract = new ethers.Contract(contractAddress, abi, this.nodeProvider);
  }

  async metamask() {
    if (!window.ethereum) {
      throw new Error("No Ethereum provider found");
    }
    this.provider = new ethers.BrowserProvider(window.ethereum);
    this.signer = await this.provider.getSigner();
    this.contract = new ethers.Contract(contractAddress, abi, this.signer);
    console.log("Provider initialized", this.provider);
  }

  async connectWallet() {
    await this.metamask();
    await this.provider.send("eth_requestAccounts", []);
  }

  async signUP() {
    await this.metamask();
    const result = await this.contract.signUP();
    return result;
  }

  async manufactureProduct(productId, qrCode, imageUrl, quantity) {

    await this.metamask();
    console.log("ProductID: ",productId," qrCode: ",qrCode,"  imageURL:  ", imageUrl, " Quantity: ", quantity);
    const tx = await this.contract.manufactureProduct(productId, qrCode, imageUrl, quantity);
    await tx.wait();
    return tx;
  }

  async transferProduct(productId, toOwnerID, quantity, location) {
    await this.metamask();
    console.log("ProductID: ",productId," TransferTo: ",toOwnerID,"  Location  ", location, " Quntity: ", quantity);
    const tx = await this.contract.transferProduct(productId, toOwnerID, quantity, location);
    await tx.wait();
    return tx;
  }

  async sellProduct(productId, customer, quantity) {
    await this.metamask();
    const tx = await this.contract.sellProduct(productId, customer, quantity);
    await tx.wait();
    return tx;
  }

  async checkProduct(ownerID, qrCode) {
    console.log("ownerId:", ownerID, "qrCode:", qrCode);
    
    // Call the smart contract function
    const product = await this.nodeContract.checkProduct(qrCode, ownerID);
    
    // Extract the specific values from the returned tuple
    const extractedProduct = {
        qrCode: product.qrCode,
        ownerID: product.ownerID.toString(), // Convert BigInt to string if necessary
        location: product.location,
        quantity: product.quantity.toString() // Convert BigInt to string if necessary
    };

    // Log the extracted values for debugging
    console.log("Extracted Product Info:", extractedProduct);

    return extractedProduct;
}


  async getProductOwnerID(qrCode) {
    const ownerID = await this.nodeContract.qrCodes(qrCode);
    return ownerID;
  }
  
  async getProductImage(productId){
    const image = await this.nodeContract.productImage(productId);
    return image;
  }

  async getOwnerID(address) {
    const ownerID = await this.nodeContract.ownerID(address);
    return ownerID.toNumber ? ownerID.toNumber() : parseInt(ownerID, 10); // Convert if necessary
  }
}

export default new SmartContractService();