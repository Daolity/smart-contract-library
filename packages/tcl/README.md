## Token Creation Library


### Description

This open-source library provides a robust and efficient way to create fungible and non-fungible tokens on the Ethereum blockchain. It includes three Solidity smart contracts: ERC20, ERC721, and ERC1155. These contracts are designed to be used with any Ethereum development framework, making it easier for developers to build and deploy their applications.

### Contracts

- **ERC20**: An implementation of the ERC20 token standard. This contract allows users to create and manage their own fungible tokens on the Ethereum blockchain. It is based on the OpenZeppelin library version 4.8.3.

- **ERC721**: An implementation of the ERC721 token standard. This contract enables the creation and management of unique, non-fungible tokens (NFTs) on the Ethereum blockchain. It is based on the OpenZeppelin library version 4.8.3.
- **ERC1155**: An implementation of the ERC1155 token standard. This contract provides a more flexible token standard that allows for the creation of both fungible and non-fungible tokens on the Ethereum blockchain. It is based on the OpenZeppelin library version 4.8.3.

### Usage

To use these contracts in your project, you can either copy the source code directly or import the compiled bytecode and ABI files.


#### Solidity Source Code

The Solidity source code for each contract can be found in the `src/smart-contracts` folder of this repository. You can simply copy the desired contract's source code and include it in your project.


#### Bytecode and ABI

If you prefer to use the compiled bytecode and ABI files, you can find them in the `bytecode` and `abi` folders respectively. These files can be used for contract deployment and interaction. Make sure to include the appropriate bytecode and ABI for the contract you want to use in your project.


### Compiler Version

The contracts in this repository were compiled using the **Solidity compiler version 0.8.19+commit.7dd6d404**. You should use the same or a compatible version of the Solidity compiler when deploying and interacting with these contracts.