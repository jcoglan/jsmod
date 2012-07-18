if (typeof print !== 'function') print = console.log;

if (typeof require === 'function') {
  var poly = require('../lib/jsmod/polynomial').polynomial;
} else {
  load('lib/jsmod/polynomial.js');
  var poly = Jsmod.polynomial;
}

print(poly(1, -2, 3, 8));

