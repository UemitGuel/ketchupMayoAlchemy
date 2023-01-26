const { ethers, upgrades } = require('hardhat');

async function main() {
  const Ketchup = await ethers.getContractFactory("Ketchup");
  const proxy = await upgrades.deployProxy(Ketchup);
  await proxy.deployed();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxy.address);

  console.log('Proxy contract address: ' + proxy.address);

  console.log('Implementation contract address: ' + implementationAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 
