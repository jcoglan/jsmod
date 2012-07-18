# jsmod

Just me trying to learn how to use JS module systems properly. Nothing to see
here.

This repo contains two scripts with a dependency:

* `lib/jsmod.js` contains a function for squaring numbers
* `lib/jsmod/polynomial.js` has a polynomial function that depends on `jsmod.js`

Both files attempt to expose their APIs for consumption through CommonJS, AMD,
and browser globals where appropriate. They also deal with referencing
dependencies using whatever tools are available at runtime.

The following should all output `51`:

    v8 test/console.js
    node test/console.js
    spidermonkey test/console.js
    rhino test/console.js
    narwhal test/console.js
    ringo test/console.js
    cscript.exe test/console.js

This page should print `51` and `49`:

    open test/browser.html

This page should also print `51` and `49` after building with Require.js:

    npm install
    ./node_modules/.bin/r.js -o name=lib/jsmod/polynomial out=build/app-require.js
    open test/browser-build.html

