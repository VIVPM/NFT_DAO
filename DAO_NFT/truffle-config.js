// require('babel-register')
// require('babel-polyfill')
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  // Configure networks (Localhost, Rinkeby, etc.)
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8501,
      network_id: '*', // Match any network id
      gasPrice: 1,
      
    },
    // goerli: {
    //   provider: () =>
    //     new HDWalletProvider('TArDvMk6su1JCf7VRdLWBuS_uYT8G-2V', 'https://eth-mainnet.g.alchemy.com/v2/TArDvMk6su1JCf7VRdLWBuS_uYT8G-2V'),
    //   network_id: 5,
    //   gas: 5500000,
    //   confirmations: 2, // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    // },
  },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.11',
      settings: {    //need to add "settings" before "optimizer" for latest truffle version
        optimizer: {
          enabled: true, // enable the optimizer
          runs: 200,
        },
        evmVersion: "berlin",
      },
    },
  },
}
