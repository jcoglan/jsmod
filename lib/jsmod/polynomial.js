// Module boilerplate. This section deals with exposing the module via CommonJS,
// AMD or global names using feature detection to figure out what to do.

// Note that `define(['../jsmod'], ...` must appear literally, or r.js will not
// include the required dependencies (they are considered dynamic if required
// using a variable reference).
// 
// A more appealing way to do this would be to open the application code like:
//
//     })(['../jsmod'], function(jsmod) {
// 
// and then in the module boilerplate use this argument to load the deps, i.e.
// for AMD we would do:
// 
//     define(deps, definition);
// 
// and for CommonJS we could do:
// 
//     var depExports = deps.map(function(d) { return require(d) }),
//         exported   = definition.apply(this, depExports);
// 
// Note that we can't do `deps.map(require)` because the additional arguments
// introduced by `map` cause errors on RingoJS.

(function(definition) {
  if (typeof define === 'function' && typeof require === 'function') {
    define(['../jsmod'], definition);
  }
  else if (typeof require === 'function') {
    var jsmod    = require('../jsmod'),
        exported = definition(jsmod);
    
    if (typeof module === 'object' && typeof module.exports === 'object') {
      module.exports = exported;
    }
    else {
      for (var key in exported)
        exports[key] = exported[key];
    }
  }
  else {
    if (typeof load === 'function') load('lib/jsmod.js');
    var exported = definition(this.Jsmod);
    this.Jsmod.polynomial = exported.polynomial;
  }


// Application code. This section accepts dependencies as arguments and returns
// an object exposing its API.

})(function(jsmod) {
  
  return {
    polynomial: function(a, b, c, x) {
      return a * jsmod.square(x) + b * x + c;
    }
  };
});

