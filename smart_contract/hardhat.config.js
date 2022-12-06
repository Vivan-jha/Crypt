require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/gJizz18SV9DziYTK_Mqzv9xECLqmAd7F',
      accounts: ['fd0a3ab31d9239caadeb9ebda1d8886b341410544f754841326462ad560a1098'],
    },
  },
};