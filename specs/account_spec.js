var assert = require('assert');
var Account = require('../account.js');

describe('Account', function() {

  var account1;

  beforeEach(function() {
    account1 = new Account('Kara', 10000, 'personal');
  });

  it('should have a name', function() {
    assert.strictEqual(account1.owner, 'Kara');
  });

  it('should have amount', function() {
    assert.strictEqual(account1.value, 10000);
  });

  it('should have a type', function() {
    assert.strictEqual(account1.type, 'personal');
  });

});
