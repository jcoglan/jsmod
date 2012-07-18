// Module boilerplate. This section deals with exposing the module via CommonJS,
// AMD or global names using feature detection to figure out what to do.

(function(factory) {
  if (typeof exports === 'object') {
    factory(exports);
  }
  else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  }
  else {
    factory(this.Jsmod = {});
  }


// Application code. This section accepts an exports object and dependencies as
// arguments and adds its API to the exports.

})(function(exports) {
  
  exports.square = function(x) {
    return x * x;
  };
});

