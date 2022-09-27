
// const hre = require("hardhat");

const main = async () => {
  const Weather = await hre.ethers.getContractFactory('Weather');
  const weatherIns = await Weather.deploy();

  await weatherIns.deployed();

  console.log('deployed to ' + weatherIns.address );
}

main()
  .then(res => {
    if(!res){
      return 
    }
    console.log({ res })
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
