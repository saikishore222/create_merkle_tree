import { Network, signAndSendTransactionWithPrivateKeys } from "@shyft-to/js";

const axios = require('axios'); 

const YOUR_WALLET_ADDRESS = '2nJkRwLinndkLXVdtytLW17kqqxKQN6pVmBFi32NWA5N';
const network = 'devnet' 
async function createMerkleTree() {
  const response = await axios.post("https://api.shyft.to/sol/v1/nft/compressed/create_tree", /* Shyft create merkle API endpoint */  {
    network,
    wallet_address: YOUR_WALLET_ADDRESS,
    max_depth_size_pair: {
      max_depth: 14,
      max_buffer_size: 64
    },
    canopy_depth: 11
  }, {
    headers: {
      "x-api-key": 'tAgW96vYwYlxd6K3' // replace with your own key. Get free one from shyft.to
    }
  });
  console.dir(response.data, { depth: null })
  const value= response.data['result']['encoded_transaction'];
  const network1 = Network.Devnet;
const privateKeys = ['2iHazYMXYuPyw4UQzMhqizgcQhjfzChYWhdcrBVJDnQqLvQdf6uUw3xnrSgRxzYpLWAZBg8QhRB9G1Ukb2whtG64' ?? ""];
  const txnSignature = await signAndSendTransactionWithPrivateKeys(
    network1,
    value,
    privateKeys
  );
  console.log("https://translator.shyft.to/tx/"+txnSignature+"?cluster=devnet");
}

createMerkleTree();


