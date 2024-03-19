import { Keypair } from "@solana/web3.js";

// Assuming privateKey is a string containing the private key
const privateKeyBytes = [
    157, 170, 78, 40, 20, 111, 153, 201, 139, 172, 32,
    87, 4, 25, 91, 126, 121, 41, 211, 80, 251, 126,
    160, 208, 146, 104, 135, 187, 13, 174, 217, 147,
    30, 96, 227, 32, 98, 197, 129, 14, 188, 219, 96,
    26, 227, 139, 124, 97, 107, 180, 65, 180, 187,
    247, 152, 101, 224, 143, 157, 20, 215, 129, 87,
    155
  ];
  
  // Convert bytes array to hexadecimal string
  const privateKeyHex = Buffer.from(privateKeyBytes).toString('hex');
  console.log("Private Key (hex):", privateKeyHex);
  

// Create a keypair object using the private key
const keypair = Keypair.fromSecretKey(Buffer.from(privateKeyHex, "hex"));

// Get the public key from the keypair
const publicKey = keypair.publicKey;

console.log("Public Key:", publicKey.toBase58());
