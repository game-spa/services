### Single SPA Setup

Steps to test your utility module:

1. Run 'npm start -- --port 8500
2. Go to http://single-spa-playground.org
3. Run the following in the browser console: window.importMapOverrides.addOverride('@game-spa/services', '8500')
4. Run the following in the browser console: System.import('@game-spa/services')