const crypto = require('crypto')
const fs = require('fs')


var args = process.argv;

const encryptedData = args[2]

if(!encryptedData)
{
  console.error("no data provided. try npm run decrypt <DATA>")
  return
}

const privateKey = fs.readFileSync('private.pem', { encoding: 'utf-8' })

if(!privateKey){
    console.error("no private key is provided. try run npm run generate")
}

const decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    // In order to decrypt the data, we need to specify the
    // same hashing function and padding scheme that we used to
    // encrypt the data in the previous step
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  },
  Buffer.from(encryptedData, 'base64'),
)

console.log(decryptedData.toString('utf-8'))
