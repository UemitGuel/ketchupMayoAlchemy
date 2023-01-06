const hre = require("hardhat");

async function main() {
  const Ketchup = await hre.ethers.getContractFactory("Ketchup");
  const ketchup = await Ketchup.deploy();

  await ketchup.deployed();

  console.log(
    `New Contract deployed to ${ketchup.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 
