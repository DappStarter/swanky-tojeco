require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name riot sad erosion gloom kangaroo army gate'; 
let testAccounts = [
"0x3b47b015ed169c9735e96bb90331d8b95acc6a5e43984c592292d8e7e59f78d6",
"0x40f0ab34e37120bb4104a18e9b4ac95ca4c2b32e3ac6c3def197dd97ea7e830b",
"0xfae88cd85a3b83f94ee895fd1ba54b2a77a37135968cfa55048ae1e1a7d4c2d5",
"0xe347ff5a498eae7edba3cd74a530a98152f3b204115c492d11b95cd3f45c550a",
"0x04e44f0b62ab4184fd12f29a728ca40cc66fc7e333dff58f15620f3009b73713",
"0xab5de96d7d24b26bddbd6bcd4baeb6d10efa74d5adb3eb429b133983aaf03991",
"0x6fa0a8708f6e9d71952a14e825141790d41e1dad4f0fb217f0148fbd7af89d08",
"0x636b985e3b64ae3dc0c9f75648d65c8be7a1f656a511899556f768e7b82f0e30",
"0xe77c0b482f56b6ee9761712ce89dfc760eab1d94a9b3b11e26f9b0ca1b954efa",
"0x43619bce4433ab096972ebda4a4162b3038fbc3e0e49760e1998d60e485796b7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
