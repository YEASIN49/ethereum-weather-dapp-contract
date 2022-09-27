// https://eth-goerli.g.alchemy.com/v2/EN19rzc4LDI8dvNkVUn31Cg-SV6NQToE

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
require('@nomiclabs/hardhat-waffle')


module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/'+process.env.ALCHEMY_API,
      accounts: [process.env.PRV_KEY]
    },
  },
};

// deployed to 0xeCA1605933175cD23cc1B1400CC606cC4b381F82