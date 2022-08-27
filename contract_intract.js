const { ethers } = require("ethers");

const key = "37e121332b9b47b5a4499c3a4313adc7";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${key}`
);
const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const balance = await contract.balanceOf(
    "0x6B175474E89094C44Da98b954EedeAC495271d0F"
  );
  const totalSupply = await contract.totalSupply();

  console.log(`name = ${name}`);
  console.log(`symbol = ${symbol}`);
  console.log(`balance = ${ethers.utils.formatEther(balance)}`);
  console.log(`totalSupply = ${ethers.utils.formatEther(totalSupply)}`);
};
main();
