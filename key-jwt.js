const crypto = require('crypto')
const fs = require('fs')

// RSA key size in bits
const keySize = 2048

// Generate the RSA key pair asynchronously
crypto.generateKeyPair(
    'rsa',
    {
        modulusLength: keySize,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    },
    (err, publicKey, privateKey) => {
        if (err) {
            console.error('Error generating keys:', err)
            return
        }

        // Write the public key to a .pem file
        fs.writeFile('public-key.pem', publicKey, (err) => {
            if (err) throw err
            console.log('Public key has been saved to public-key.pem')
        })

        // Write the private key to a .pem file
        fs.writeFile('private-key.pem', privateKey, (err) => {
            if (err) throw err
            console.log('Private key has been saved to private-key.pem')
        })

        // Encode the keys in Base64
        const publicKeyBase64 = Buffer.from(publicKey).toString('base64')
        const privateKeyBase64 = Buffer.from(privateKey).toString('base64')

        // Write the Base64-encoded public key to a .txt file
        fs.writeFile('public-key-base64.txt', publicKeyBase64, (err) => {
            if (err) throw err
            console.log('Base64-encoded public key has been saved to public-key-base64.txt')
        })

        // Write the Base64-encoded private key to a .txt file
        fs.writeFile('private-key-base64.txt', privateKeyBase64, (err) => {
            if (err) throw err
            console.log('Base64-encoded private key has been saved to private-key-base64.txt')
        })
    }
)
