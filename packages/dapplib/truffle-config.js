require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember uncle hunt battle sun swamp'; 
let testAccounts = [
"0xeb2c7ea234934128de51ba3303d7621321af8d56b2a40ce1691eb890de532872",
"0xb8feeee0b21cc2f9bb91e5cde95d21fb1d42cf3b83ad21d9ef25a0fc61d3970d",
"0x4a68f8849668da89eaf3b83b7b7b1765958303ed61acf7f27b2dd8383c8febfa",
"0xc90642aa4e0b5050c4e63ca5dc591582e08d80cd000677e6e6cfefafc88d2f19",
"0x846d979b549cb9cd97399b8c99730c15e99b3db7ec96847dbaa5315f300ad8de",
"0x3489219d1c07a86914b1f65f3ce6950da90ad553a959dd6ef4638fe5ac348e48",
"0xb618fe0bb18cb6c7cc5d510d777fada09bfb3a872446c990cb6a181d7b3e2b2f",
"0xdc43ec765ef8ffd1e30ef313df1c33e53c117f3e1889017af98ae6d281e5d6af",
"0xfee69382acc053fe81cffe4da13e1795675fdbf7192e917c1f7324d2c56dc1c5",
"0x1613a3d2336f01153cdbcc7873beb68a5c8b31a913141599a74354d6053f7fd2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


