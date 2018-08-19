//импортируем Web3
Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var BigNumber = require('bignumber.js');

//abi контракта
var contract = '0xc39589ab6f771e074ea155c6c43c50fc6216b3e6'
var abi = [{"constant":false,"inputs":[],"name":"checkGoalReached","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenReward","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundingGoal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"amountRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getGoal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"safeWithdrawal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"ifSuccessfulSendTo","type":"address"},{"name":"fundingGoalInEthers","type":"uint256"},{"name":"durationInMinutes","type":"uint256"},{"name":"etherCostOfEachToken","type":"uint256"},{"name":"addressOfTokenUsedAsReward","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"totalAmountRaised","type":"uint256"}],"name":"GoalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"backer","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"isContribution","type":"bool"}],"name":"FundTransfer","type":"event"}]
var Crowdfunding = web3.eth.contract(abi);
contractInstance = Crowdfunding.at(contract);

web3.eth.defaultAccount = web3.eth.accounts[0]
var defaultAccount = web3.eth.defaultAccount
web3.personal.unlockAccount(defaultAccount);



$(document).ready(function() {
  $("#elapsed").html(contractInstance.getTime.call().toString())
  $("#collected").html(contractInstance.getRaised.call().toNumber())
  $("#target").html(contractInstance.getGoal.call().toNumber())

    // candidateNames = Object.keys(candidates);
    // for (var i = 0; i < candidateNames.length; i++) {
    //   let name = candidateNames[i];
    //   let val = contractInstance.totalVotesFor.call(name).toString()
    //   $("#" + candidates[name]).html(val);
    // }
  });

function sendEth(_from, _to, _amount) {
    web3.eth.sendTransaction({
        from: _from,
        to: _to,
        value: web3.utils.toWei(_amount, 'ether'),
        gas: '0x2710'
    }).then(function(receipt) {
        console.log(receipt);
    });
}

function buyTocken() {
    amount =  $("#clientAddress").val();
    address = $("#clientAddress").val();

}

// function createAccount(_password) {
//   var nObj = web3.eth.accounts.create();
//   web3.eth.accounts.wallet.add(nObj);
//   web3.eth.accounts.wallet.save(_password);
//   return nObj;
// }

// function loadAccount(_password) {
//   try {
//       var l = web3.eth.accounts.wallet.load(_password);
//       console.log("Account Unlocked")
//       return l;
//   } catch (e) {
//       console.log(e);
//   }
// }