
const hre = require("hardhat");

async function main() {
  const CryptoTransfer = await hre.ethers.getContractFactory('CryptoTransfer');
  const cryptotransfer = await CryptoTransfer.deploy();

  await cryptotransfer.waitForDeployment();

  console.log("CONTRACT DEPLOYED TO : ", cryptotransfer.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
