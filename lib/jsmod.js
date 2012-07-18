// Module boilerplate. This section deals with exposing the module via CommonJS,
// AMD or global names using feature detection to figure out what to do.

(function(definition) {
  if (typeof define === 'function' && typeof require === 'function') {
    define([], definition);
  }
  else if (typeof require === 'function') {
    var exported = definition();
    
    if (typeof module === 'object' && typeof module.exports === 'object') {
      module.exports = exported;
    }
    else {
      for (var key in exported)
        exports[key] = exported[key];
    }
  }
  else {
    this.Jsmod = definition();
  }


// Application code. This section accepts dependencies as arguments and returns
// an object exposing its API.

})(function() {
  
  var Jsmod = {};
  
  Jsmod.square = function(x) {
    return x * x;
  };
  
  return Jsmod;
});

