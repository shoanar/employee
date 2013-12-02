var Browser = require('zombie');
var assert = require('assert');
var connect = require('connect');

var app = __dirname + '/../www';
var port = 4242;
 
describe('Employee Directory', function() {
  before(function() {
    this.server = connect.createServer(connect.static(app)).listen(port);
    this.browser = new Browser({ site: 'http://localhost:' + port });
  });
 
  before(function(done) {
    this.browser.visit('/index.html', done);
  });

  it("should list employees", function(){
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h1'), 'Employee Directory');
    assert.equal(this.browser.text('h2'), 'Employee List');
  });

  after(function(done) {
    this.server.close(done);
  });
 
});


