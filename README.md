# react-typescript-npm-boilerplate

This is a boilerplate that helps creating npm packages using React, Typescript, Jest and post css.
It also provides an example folder initialised with create-react-app where the library can be developed(having hot reload) and also viewed. The demo app can be also deployed using gh-pages, this example can actually be found here: https://techbinator.github.io/react-typescript-npm-boilerplate

## Installation:

Clone the repo

```
npm i
```

## Developing:

To start developing, run `npm start`. It will build your library and run example `create-react-app` where you can test your components. Both the component library and the example create-react-app would run in paralel and will be automatically reloaded if any of the 2 would be modified

## Pre-Publish steps:

- Remove the .git folder
  `rm -rf .git`
- Modify the package.json fields: name, description, author,keywords,repo, bugs, homepage, license(if needed).
- Modify the README.md file in order to describe the library.
- In the `./example/package.json` modify the homepage and dependencies part `react-typescript-npm-boilerplate` with the name of your library
- Modify the imported library name in the `./example/src/App.tsx` from `react-typescript-npm-boilerplate` to your own libary name
- Init git and add the remote origin path

```
git remote add origin https://github.com/Techbinator/skeleton-text.git
git push -u origin master
```
