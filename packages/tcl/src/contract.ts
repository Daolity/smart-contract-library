import { ethers } from "ethers";
import { abi } from "./abi";

 async function initializeContract(
  contractAddress: string,
  privateKey: string | ethers.SigningKey
) {
  // 1. Validate contract address and private key:
  if (!ethers.isAddress(contractAddress)) {
    throw new Error("Invalid contract address");
  }
  //   if (!ethers.isHexString(privateKey)) {
  //     console.log("privateKey", privateKey);
  //     throw new Error("Invalid private key");
  //   }

  // 2. Create a provider:
  const provider = new ethers.JsonRpcProvider(
    "https://bsc-testnet.public.blastapi.io"
  );

  // 3. Create a wallet connected to the provider and signer:
  const wallet = new ethers.Wallet(privateKey, provider);

  // 4. Create a contract instance using the loaded ABI:
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  return contract;
}

 async function getBalance(contract: Promise<any>, address: string) {
  // 1. Validate address:
  if (!ethers.isAddress(address)) {
    throw new Error("Invalid address");
  }


  try {

    return { balance: null, loading: true, error: null };

  } catch (error) {
    console.error("Error fetching balance:", error);
    return { balance: null, isSuccess: false, error }; // Return null balance and error
  } finally {
    const resolvedContract = await contract;

    const unformattedBalance = await resolvedContract.balanceOf(address);

    // 3. Format the balance using ethers.utils.formatEther:
    const balance = ethers.formatEther(unformattedBalance);
    return { balance, loading: false, isSuccess: true, error: null }; // Return balance and no error
  }
}

 async function transfer(contract: Promise<any>, to: any, amount: any) {

  // 1. Validate input parameters:
  if (!ethers.isAddress(to)) {
    throw new Error("Invalid recipient address");
  }
  const transferAmount = ethers.parseEther(`${amount}`);

  try {
    // 4. Send the transaction :
    const resolvedContract = await contract;
    const tx = await resolvedContract.transfer(to, transferAmount);
    console.log("Transfer transaction hash:", tx.hash);
    await tx.wait(); // Wait for the transaction to be mined
    console.log("Transfer transaction mined!", tx.transactionHash);

    return { success: true, error: null }; // Return success flag and no error
  } catch (error) {
    console.error("Error transferring tokens:", error);
    return { success: false, error }; // Return error flag and error
  }
}


export { initializeContract, getBalance, transfer };
