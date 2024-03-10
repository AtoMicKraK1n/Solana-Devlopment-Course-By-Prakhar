import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

async function start() {
    try {

const publicKey = new PublicKey("33avGkWoYrdD7f8N788tt5tv8716h6XpZUygdDPDWMk6");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);

}
catch (error) {
    console.error("Error:", error);
}
}


start();