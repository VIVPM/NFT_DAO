/* eslint-disable no-undef */
const TimelessNFT = artifacts.require('TimelessNFT')
const DominionDAO = artifacts.require('DominionDAO')

module.exports = async function (deployer) {
  await deployer.deploy(DominionDAO)
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(TimelessNFT, 'Timeless NFTs', 'TNT', 10, accounts[1])
}
