# RSA Encryption/Decryption Module

This module allows you to encrypt and decrypt files using RSA encryption.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed Node.js.
* You have installed npm.

## Using RSA Encryption/Decryption Module

To use the RSA module, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running `npm install`.

### Key Generation

Before you can encrypt or decrypt files, you need to generate a key pair. This can be done by running the following command:

```bash
npm run generate
```

This will generate a public and private key pair and save them in the project directory.

### Encryption

To encrypt a message, run the following command:

```bash
npm run encrypt <data>
```

Replace `<data>` with the message you want to encrypt. This will print encrypted version of the message in the console.

### Decryption

To decrypt a message, run the following command:

```bash
npm run decrypt <data>
```

Replace `<data>` with the message you want to decrypt. This will print a decrypted version of the message in the console.

