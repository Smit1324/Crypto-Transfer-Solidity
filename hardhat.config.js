require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Oowoyz7KP_2pTBFvuDMEFtGJHecUSnrb',
      accounts: ['397ebb4c333da305ff7a5c56e172cdd921532327d19a14bcc40554bfe87d238d']
    }
  },
  paths: {
    artifacts: "../client/src/artifacts"
  }
};
