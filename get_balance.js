const { ethers } = require("ethers");

const key = "37e121332b9b47b5a4499c3a4313adc7";
const address = "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${key}`
);

const main = async () => {
  const balance = await provider.getBalance(address);
  const signer = await provider.getSigner();
  console.log(`${ethers.utils.formatEther(balance)}`);
  console.log(signer);
};

main();
console.log("Please wait..");
