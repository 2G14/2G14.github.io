# GitHub Pages

## about
test page is react + typescript(+ scss) sample page now.
I will test variable page.

## src tree

```src tree
.
├── index.html
└── src/
    ├── App.tsx
    ├── Content
    │   ├── About
    │   │   └── About.tsx
    │   ├── Hello
    │   │   └── Hello.tsx
    │   ├── Welcome
    │   │   └── Welcome.tsx
    │   ├── header.tsx
    │   ├── main.tsx
    │   └── pages.tsx
    └── index.tsx
```

```public content
.
├── index.html
└── public/
    ├── css
    │   ├── index.css
    │   └── scss
    │       └── index.scss
    ├── dist
    │   ├── bundle.js
    │   └── bundle.js.map
    └── img
        ├── GitHub-Mark-Light-120px-plus.png
        ├── Twitter_Logo_Blue.png
        └── favicon.ico
```

```test server
.
├── server.js # test server
└── serverContent/
    ├── mimetypes.js # mime types
    └── whitelist.js # white list
```

## set up

```bash
$ yarn init --yes
$ yarn add react react-dom
$ yarn add typescript ts-loader --dev
$ yarn add @types/react @types/react-dom --dev
$ yarn add react-router-dom
$ yarn add @types/react-router-dom --dev
$ yarn global add webpack webpack-cli
$ yarn global add node-scss # if you need
$ vim tsconfig.json # set up
$ vim webpack.config.dev.js # set up
$ vim package.json # write scripts
```

# build

```bash
$ yarn bundle
$ yarn scss # if you use scss
$ yarn test # open http://localhost:8080 in your browser
```
