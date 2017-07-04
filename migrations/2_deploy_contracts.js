var Token = artifacts.require("./SuperCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Token);
};
