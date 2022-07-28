# Vanilla-Typescript Template

This is template used to make plain html and css projects with Typescript


# How it works

This template uses webpack to compile all typescript code in the src directory into a single javascript bundle.
This enable the use of modules in the typescript code. All imports used in the index.ts code would get bundled into a single javascript file (in this case script.js) solving the problem of with tsc --watch command which will compile each imported module seperately to their javascript equivalent.

