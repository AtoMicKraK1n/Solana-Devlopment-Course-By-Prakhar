import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
  }
  from "@solana/web3.js";
  import env from 'dotenv'
  import { getKeypairFromEnvironment } from "@solana-developers/helpers";

  env.config()
  console.log(process.env.SECRET_KEY)
  
  const suppliedToPubkey = process.argv[2] || null;
  
  if (!suppliedToPubkey) {
    console.log(`Please provide a public key to send to`);
    process.exit(1);
  }
  
  const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
  
  console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
  
  const toPubkey = new PublicKey(suppliedToPubkey);
  
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  
  console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`
  );
  
  const transaction = new Transaction();
  
  const LAMPORTS_TO_SEND = 1000000000;

  const EXCHANGE_RATE = 0.0050; 

  const USD_TO_SEND = LAMPORTS_TO_SEND / 1000000000 * EXCHANGE_RATE; 
  
  const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
  });
  
  transaction.add(sendSolInstruction);
  
  async function someFunction() {
  
  const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
  ]);

  console.log(
    `💸 Finished! Sent ${LAMPORTS_TO_SEND / 1000000000} SOL to the address ${toPubkey}.
💸 Finished! Sent $ ${USD_TO_SEND} to the address ${toPubkey}. `
    
  );
  console.log(`Transaction signature is ${signature}!`);
  }

  someFunction();

  
