const { ethers } = require("ethers");
const key = "464755d16c994f1885f965584bbb109d";

const provider = new ethers.providers.JsonRpcProvider(
  `https://rinkeby.infura.io/v3/${key}`
);

const account1 = "0x906767a7A79FCD930a35F0755aF1B60F449d96E1";
const accuont2 = "0x061f7937b7b2bc7596539959804f86538b6368dc";

const privateKey1 =
  "154caf783b97ee297b06015428745fb772e90d12411b7e275e72630834bccd65";
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  const balance = await provider.getBalance(account1);
  const trns = await wallet.sendTransaction({
    to: accuont2,
    value: ethers.utils.parseEther("0.00025"),
  });

  await trns.wait();

  console.log(balance);
  console.log(trns);
};

main();
