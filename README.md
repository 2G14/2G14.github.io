# GitHub Pages

test page is react + redux + typescript sample page now.

I will test variable page.

# setting

```bash
$ yarn init --yes
$ yarn add typescript ts-loader --dev
$ yarn add react react-dom react-redux redux
$ yarn add @types/react @types/react-dom @types/react-redux --dev
$ yarn add webpack webpack-cli --dev
$ vim package.json # write scripts
$ tsc --init # create tsconfig.json
$ vim tsconfig.json # setting
$ vim webpack.config.dev.js # setting
```

# src tree

```none
.
├── index.html
└── src/
    ├── App.tsx
    ├── actions
    │   └── index.ts
    ├── components
    │   ├── AddTodoButton.tsx
    │   ├── Todo.tsx
    │   └── TodoList.tsx
    ├── containers
    │   ├── AddTodoButton.ts
    │   └── TodoList.ts
    ├── index.tsx
    ├── reducers
    │   └── todos.ts
    └── states
        └── TodoState.ts
```

