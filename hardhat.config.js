require("@nomicfoundation/hardhat-toolbox");
const dotenv =require('dotenv')

dotenv.config({ path: './config.env' })

const PVT_KEY=process.env.ACCOUNT_PVT_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Oowoyz7KP_2pTBFvuDMEFtGJHecUSnrb',
      accounts: [`${PVT_KEY}`]
    }
  },
  paths: {
    artifacts: "../client/src/artifacts"
  }
};
