import  * as tclib  from "./contract";

const { initializeContract, getBalance, transfer } = tclib;


const contractAddress = "0x1B97CcE2810bebfE4943CD637b77E530f6859B46";
const privateKey = "19327a37eed977c9a7fce2cda6bf05f72d3744d9435eda9c83770ee5c8c5844a";
const toAddress = "0x5955BE17cCF017b10adaA09a8037977c4f94AFe6";
(async () => {
    try {
      // Initialize the contract instance
      const contract = initializeContract(contractAddress, privateKey);
  
      // Get the balance of an address
      const balance = await getBalance(contract, toAddress); // Replace with the address you want to check
      console.log('Balance:', balance);
  
      // Transfer tokens to another address
    //   const transferResult = await transfer(contract, toAddress, 8); // Replace with the recipient address and amount
    //   console.log('Transfer result:', transferResult);
    } catch (error) {
      console.error('Error:', error);
    }
  })();





