// Module boilerplate. This section deals with exposing the module via CommonJS,
// AMD or global names using feature detection to figure out what to do.

// A preferable way to do this would be to declare the dependencies once, as
// part of the application code opening:
// 
//     })(['../jsmod'], function(exports, jsmod) {
// 
// and then do this for AMD:
// 
//     define(['exports'].concat(deps), factory);
// 
// and this for CommonJS:
// 
//     var depExports = deps.map(function(d) { return require(d) }),
//         injected   = [exports].concat(depExports);
//     
//     factory.apply(this, injected);
// 
// Unfortunately, r.js needs the dependencies to be literally part of the
// `define()` expression, otherwise they are treated at dynamic and resolved at
// runtime.
// 
// Also note that in the above, we cannot use `deps.map(require)`, since the
// additional arguments introduced by `map` cause errors on RingoJS.

(function(factory) {
  if (typeof exports === 'object') {
    factory(exports, require('../jsmod'));
  }
  else if (typeof define === 'function' && define.amd) {
    define(['exports', '../jsmod'], factory);
  }
  else {
    if (typeof load === 'function') load('lib/jsmod.js');
    factory(Jsmod, Jsmod);
  }


// Application code. This section accepts an exports object and dependencies as
// arguments and adds its API to the exports.

})(function(exports, jsmod) {
  
  exports.polynomial = function(a, b, c, x) {
    return a * jsmod.square(x) + b * x + c;
  };
});

