const { ethers } = require("ethers");

const key = "37e121332b9b47b5a4499c3a4313adc7";
const provider = new ethers.providers.JsonRpcProvider(
  `https://rinkeby.infura.io/v3/${key}`
);

account1 = "0x906767a7A79FCD930a35F0755aF1B60F449d96E1";
account2 = "0x1eFD561Ab1fcF58793b5b049afa184AEbd699102";

const address = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
const ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to , uint amount) returns (bool)",
];

const private_key =
  "154caf783b97ee297b06015428745fb772e90d12411b7e275e72630834bccd65";
const contract = new ethers.Contract(address, ABI, provider);
const wallet = new ethers.Wallet(private_key, provider);
const contractWithWallet = contract.connect(wallet);

const main = async () => {
  const balance = await contract.balanceOf(account1);
  console.log(`balance of sender -> ${balance}`);

  const tx = await contractWithWallet.transfer(account2, balance);
  await tx.wait();

  const balanceofsender = await contract.balanceOf(account1);
  const balanceofreceiver = await contract.balanceOf(account2);

  console.log(`balance of sender -> ${balanceofsender}`);
  console.log(`balance of reciver -> ${balanceofreceiver}`);
};

main();
