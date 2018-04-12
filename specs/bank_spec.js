var assert = require('assert');
var Bank = require('../bank.js');
var Account = require('../account.js');

describe('Bank', function() {

  var account1;
  var account2;
  var account3;
  var account4;
  var bank;

  beforeEach(function() {
    account1 = new Account('Kara', 10000, 'personal');
    account2 = new Account('Stacy', 1000, 'business');
    account3 = new Account("Jason", 100, 'personal');
    account4 = new Account("Eren", 10, 'business');
    bank = new Bank();
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    bank.addAccount(account4);
  })

});
