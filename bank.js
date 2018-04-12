var Account = require('./account.js');

var Bank = function() {
  this.accounts = []
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

Bank.prototype.accountByName = function (name) {
  var foundAccount = this.accounts.find(function(account) {
    return account.name === name;
  });
  return foundAccount;
}

Bank.prototype.largestAccount = function () {
  var largest = this.accounts[0];

  this.accounts.forEach( function( account ) {
    if (account.value > largest.value ) {
      largest = account;
    }
  })
  return largest;
}

module.exports = Bank;
