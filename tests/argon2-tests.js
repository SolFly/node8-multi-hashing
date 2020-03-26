const Buffer = require('safe-buffer').Buffer
const multiHashing = require('../')
const assert = require('assert')

console.log('')
console.log('Argon2 Tests')

const xmrigdata = new Buffer('0100fb8e8ac805899323371bb790db19218afd8db8e3755d8b90f39b3d5506a9abce4fa912244500000000ee8146d49fa93ee724deb57d12cbc6c6f3b924d946127c7a97418f9348828f0f02', 'hex')

const chukwa = new Buffer('87766c65eb2305545bb8bb5b6dddee060f9c43051de3a94c554223422549d0f5', 'hex')

const chukwaData = multiHashing['chukwa'](xmrigdata)

console.log('')
console.log('[#1] Chukwa: ', chukwaData.toString('hex'))
assert.deepEqual(chukwaData, chukwa)
