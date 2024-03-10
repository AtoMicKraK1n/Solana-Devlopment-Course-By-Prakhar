// Import necessary libraries or modules
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

async function start() {
  const network = process.env.SOLANA_NETWORK || 'mainnet';
  let rpcUrl;

  if (network === 'mainnet') {
    rpcUrl = 'https://api.mainnet-beta.solana.com';
  } else if (network === 'devnet') {
    rpcUrl = 'https://api.devnet.solana.com';
  } else {
    console.error('Invalid network specified. Use "mainnet" or "devnet".');
    return;
  }

  // Connect to the Solana network
  const connection = new Connection(rpcUrl, 'confirmed');
  
  // Example: Get balance from the connected network
  try {
    const address = new PublicKey('GgJJRwLg9NzFQ97o1CJLGLp1KLSUMBwFc6eQNVEr4fbW');
    const balance = await connection.getBalance(address);
    console.log(`Balance on ${network}:`, balance);
  } catch (error) {
    console.error('Error getting balance:', error);
  }
}

// Call the start function
start();
