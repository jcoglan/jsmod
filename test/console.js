if (this.ActiveXObject)
  load = function(path) {
    var fso = new ActiveXObject('Scripting.FileSystemObject'), file, runner;
    try {
      file   = fso.OpenTextFile(path);
      runner = function() { eval(file.ReadAll()) };
      runner();
    } finally {
      try { if (file) file.Close() } catch (e) {}
    }
  };

if (typeof print !== 'function') {
  if (typeof console === 'object')
    print = function(s) { console.log(s) };
  else if (typeof WScript === 'object')
    print = function(s) { WScript.Echo(s) };
}

if (typeof require === 'function') {
  var poly = require('../lib/jsmod/polynomial').polynomial;
} else {
  load('lib/jsmod/polynomial.js');
  var poly = Jsmod.polynomial;
}

print(poly(1, -2, 3, 8));

