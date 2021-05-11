var feed = artifacts.require("ZombieFeeding");
var attack = artifacts.require("ZombieAttack");

module.exports = function(deployer) {
    deployer.deploy(feed);
    deployer.deploy(attack);
}