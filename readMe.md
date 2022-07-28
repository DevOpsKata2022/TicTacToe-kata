# Vanilla-Typescript Template

This is template used to make plain html and css projects with Typescript


# How it works

This template uses webpack to compile all typescript code in the src directory into a single javascript bundle.
This enable the use of modules in the typescript code. All imports used in the index.ts code would get bundled into a single javascript file (in this case script.js) solving the problem of with tsc --watch command which will compile each imported module seperately to their javascript equivalent.

# Development guilde

`npm run start` This commande launch the application and run a dev server at localhost:9000

`npm run test` This commande run unit test

`npm run wdio` This command run integration test. (Appication need to be started before, it does not run dev server automaticaly)

