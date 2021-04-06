### Urql Preact Issue Next

This repository demonstrates an issue with [@urql/preact](https://github.com/FormidableLabs/urql/tree/main/packages/preact-urql) when used in a [Next.js](https://github.com/vercel/next.js) project that uses Preact.

To see the problem at hand, run the following commands:

```
git clone https://github.com/geisterfurz007/urql-preact-issue-next.git
cd urql-preact-issue-next
yarn
yarn next
```

open [http://localhost:3000](http://localhost:3000) and wait for the page to compile.

The console shows:

```
error - ./node_modules/@urql/preact/dist/urql-preact.mjs
Can't import the named export 'createContext' from non EcmaScript module (only default export is available)
```
