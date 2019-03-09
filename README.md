# GitHub Pages

## about
test page is react + typescript sample page now.
I will test variable page.

## src tree

```none
.
├── test.server.js
├── index.html
└── src/
    ├── App.tsx
    ├── Content/
    │   ├── About/
    │   │   └── About.tsx
    │   ├── Friends/
    │   │   └── Friends.tsx
    │   ├── Hello/
    │   │   └── Hello.tsx
    │   ├── header.tsx
    │   ├── link.tsx
    │   └── main.tsx
    └── index.tsx
```

## set up

```bash
$ yarn init --yes
$ yarn add react react-dom
$ yarn add typescript ts-loader --dev
$ yarn add @types/react @types/react-dom
$ yarn global add webpack webpack-cli
$ tsc --init
$ vim tsconfig.json # set up
$ vim webpack.config.dev.js # set up
$ vim package.json # write scripts
```

# build

```bash
$ yarn bundle
$ yarn test # open http://localhost:8080 in your browser
```
