const fs = require("fs");
const crypto = require("crypto");

var args = process.argv;

const dataToEncrypt = args[2]
if(!dataToEncrypt)
{
  console.error("no data provided. try npm run encrypt <DATA>")
  return
}
const publicKey = Buffer.from(
  fs.readFileSync("public.pem", { encoding: "utf-8" })
);

if(!publicKey){
  console.error("no public key is provided. try run npm run generate")
}

const encryptedData = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  Buffer.from(dataToEncrypt)
);

console.log(encryptedData.toString("base64"))
