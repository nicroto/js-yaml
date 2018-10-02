'use strict';


var assert = require('assert'),
    yaml = require('../../'),
    readFileSync = require('fs').readFileSync;


test('should allow cast integers as !!float', function () {
  var data = yaml.safeLoad(readFileSync(require('path').join(__dirname, '/0500.yml'), 'utf8'));

  assert.deepEqual(data, {
    test: 'this should not end with a new line',
    test2: 'this also',
    test3: 'this should end on a single new line\n',
    test4: 'this should end on a double new line\n\n'
  });
});
