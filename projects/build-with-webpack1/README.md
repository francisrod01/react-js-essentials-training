# ReactJS Essentials Training #

You'll understand the essentials of React.js and be able to start building your own browser-based projects.

- Course on [LinkedIn][1] by [Eve Porcello][2]
- Author from this repo: [Francis Rodrigues][3]

## Introduction - Building with Webpack 1 ##

### Version ##

- react@16.3.2
- react-dom@16.3.2
- babel-core@5.8.38
- webpack@1.13.3
- json-loader@0.5.4
- style-loader@0.13.1
- css-loader@0.25.0
- autoprefixer-loader@3.2.0
- sass-loader@4.0.2
- node-sass@^3.10.1

### React Developer Tools ###

Are available for `Chrome` and `Firebox` as well.

### Where was React created ###

Facebook

### Why would you want to install the React Developer tools ###

- to see props and state information
- to understand which components are nested inside of one another
- to view all of the React elements on the page

### Updating the DOM is fast in React because ###

React makes the minimal changes to make it an update it.

## How to run this ##

You can run this project easly using a http serve you prefer or one of these that I suggest you below.

### 1. Using httpster ###

Simple http server for quick loading of content

You can install globally using npm as below:

```bash
~$ npm -g i httpster
```

Or you can use yarn if you prefer:

```bash
~$ yarn global add httpster
```

Then from any directory where you want to have an http service running, just run:

```bash
~$ httpster -p 8080 -d /home/somedir/public_html
```

### 2. Using serve ###

It provides a neat interface for listing the directory's contents and switching into sub folders.

In addition, it's also awesome when it comes to serving static sites!

![Using serve to serving static sites](https://raw.githubusercontent.com/zeit/art/4bafffc43b38f3b796eb2f9071292d13d129a7d8/serve/example.png)

Install it (needs at least Node LTS):

```bash
~$ npm -g i serve
```

or you can use yarn:

```bash
~$ yarn global add serve
```

And run this command in your terminal:

```bash
~$ serve [options] <path>
```

Run this command to see a list of all available options:

```bash
~$ serve help
```

## Using ReactJS as Pure React ##

You can start with React as simple as a JavaScript file.

```js
const { createElement } = React
const { render } = ReactDOM

const style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
}

const title = createElement(
  'h1',
  { id: 'title', className: 'header', style: style },
  'Hello World'
)

render(
  title,
  document.getElementById('react-container')
)
```

And we just need to create our `index.html` and point the our js file to there.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/react@<VERSION>/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@<VERSION>/umd/react-dom.production.min.js"></script>
    <meta charset="UTF-8">
    <title>Hello World with React</title>
</head>
<body>
    <div id="react-container"></div>
    <script src="index.js"></script>
</body>
</html>
```

## Using ReactJS with JSX syntax ##

To create a better application you can use the JSX syntax recommended for the React doc.

```jsx
const { render } = ReactDOM

const style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
}

render(
  <h1
    id='title'
    className='header'
    style={style}>
    Hello World
  </h1>,
  document.getElementById('react-container')
)
```

## Transpiling JavaScript using Babel ##

### What is Babel ###

Babel is a JavaScript compiler

Babel has support for the latest version of JavaScript through syntax transformers.

These plugins allow you to use new syntax, right now without waiting for browser support.

![Babel try it out](./screenshots/babel-try-it-out.png)

You can read more about it in [Babel oficial doc][7]

### Static transpiling with babel-cli ###

1 - Create a package.json running your favorite repo manager `npm` or `yarn` and install some dependencies as `dev` as below:

```bash
~$ yarn add -D babel-cli@6.18.0 babel-preset-latest@6.16.0 babel-preset-react@6.16.0 babel-preset-stage-0@6.16.0
```

Your code will be like this:

```json
"devDependencies": {
  "babel-cli": "6.18.0",
  "babel-preset-latest": "6.16.0",
  "babel-preset-react": "6.16.0",
  "babel-preset-stage-0": "6.16.0"
}
```

2 - Create a `.babelrc` file in root on your project and put that resources:

```json
{
  "presets": [
    "latest",
    "react",
    "stage-0"
  ]
}
```

3 - In your `index.html` file remove the babel javascript reference and make some adjustments.

The code for it follow as below:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/react@<VERSION>/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@<VERSION>/umd/react-dom.production.min.js"></script>
    <meta charset="UTF-8">
    <title>Hello World with React</title>
</head>
<body>
    <div id="react-container"></div>
    <script type="text/javascript" src="bundle.js"></script>
</body>
</html>
```

4 - Run the `babel-cli` command on console to transpille the `index.js` code

```bash
~$ babel ./src/index.js --out-file ./dist/bundle.js
```

5 - In your `package.json` file put a start command to initialize our application

```json
"scripts": {
  "start": "serve -s ./dist -p 3000"
}
```

6 - Now the project structure is a little different to be more easy to understand

```txt
my-app
├── node_modules/ (node modules folder)
├── .babelrc (babel resources)
├── .gitignore
├── package.json
├── README.md (our Doc about the project)
├── dist/
│   └── index.html
│   └── bundle.js (generated by babel-cli)
└── src/ (our source folder)
    └── index.js
```

7 - Run the start command on the console to execute our app again.

```bash
~$ serve -s ./dist -p 3000

   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Serving!                                        │
   │                                                   │
   │   - Local:            http://localhost:3000       │
   │   - On Your Network:  http://192.168.0.104:3000   │
   │                                                   │
   │   Copied local address to clipboard!              │
   │                                                   │
   └───────────────────────────────────────────────────┘
```

## Improve building using Webpack ##

You can improve the code transpilling process with Babel using webpack.

### What is webpack ###

Webpack is used to compile JavaScript modules.

Once installed, you can interface with webpack either from its CLI or API.

### How to install webpack on my project ###

```bash
~$ yarn add webpack@1.13.3 -D
~$ yarn add babel-loader@6.2.5 -D
~$ yarn add webpack-dev-server@1.16.2 -D
```

### How to config webpack to build ###

Create a `webpack.config.js` file on the root path to our project

```js
var webpack = require('webpack')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: "./dist/",
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ["babel-loader"],
        query: {
          presets: ["latest", "stage-0", "react"]
        }
      }
    ]
  }
}
```

Now our `bundle.js` is in `./dist/assets` path, so we need to change it in our `index.html` file.

Before webpack

```html
<script type="text/javascript" src="bundle.js"></script>
```

After install and configure webpack

```html
<script type="text/javascript" src="assets/bundle.js"></script>
```

### Running webpack-dev-server ###

And change our `start` command on `package.json` file to running using `webpack-dev-server`

```json
"scripts": {
  "start": "./node_modules/.bin/webpack-dev-server"
}
```

Running the `start` command we receive the webpack output as below:

```bash
$ ./node_modules/.bin/webpack-dev-server
 http://localhost:3000/
webpack result is served from /assets
content is served from ./dist/
Hash: 3ab4f982cf78411c2fb9
Version: webpack 1.13.3
Time: 857ms
    Asset    Size  Chunks             Chunk Names
bundle.js  241 kB       0  [emitted]  main
chunk    {0} bundle.js (main) 222 kB [rendered]
.....
webpack: Compiled successfully.
```

If you put a modification in your JS code, webpack will compile a new bundle and refresh the web page that is running it.

## Loading JSON with webpack ##

Install a `json-loader` dependency

```bash
~$ yarn add -D json-loader@0.5.4
```

Change the `webpack.config.js` file and config a `json-loader` inside module loaders

```js
module: {
  loaders: [
    // ... babel-loader
    {
      test: /\.json$/,
      exclude: /(node_modules)/,
      loader: "json-loader"
    }
  ]
}
```

Create a `./src/titles.json` file

```json
{
  "hello": "Bonjour !",
  "goodbye": "Au Revoir !"
}
```

We will create two little components here, first create a titles `./src/lib.js` file

```jsx
import React from 'react'

import text from './titles.json'


export const hello = (
  <h1
    id="title"
    className="header"
    style={{ backgroundColor: 'purple', color: 'yellow' }}
  >
    {text.hello}
  </h1>
)

export const goodbye = (
  <h1
    id="title"
    className="header"
    style={{ backgroundColor: 'yellow', color: 'purple' }}
  >
    {text.goodbye}
  </h1>
)
```

And we need to import titles lib and load our components inside ReactDOM render

```jsx
import React from 'react'
import { render } from 'react-dom'

import { hello, goodbye } from './lib'


const style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
}


render(
  <div>
    {hello}
    {goodbye}
  </div>,
  document.getElementById('react-container')
)
```

We can see the result in the web browser without errors on console

![Running using webpack](./screenshots/running-using-webpack.png)

## Adding CSS to webpack build ##

We need to install some dependencies

```bash
~$ yarn add -D style-loader@0.13.1
~$ yarn add -D css-loader@0.25.0
~$ yarn add -D autoprefixer-loader@3.2.0
~$ yarn add -D sass-loader@4.0.2
~$ yarn add -D node-sass@^3.10.1
```

We need to put 2 loaders inside module loaders on webpack config file

```js
module: {
  loaders: [
    ... json-loaders

    {
      test: /\.css$/,
      loader: "style-loader!css-loader!autoprefixer-loader"
    },
    {
      test: /\.scss$/,
      loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
    }
  ]
}
```

Create the `./src/stylesheets/hello.css` file

```css
.hello {
  background-color: indigo;
  color: turquoise
}
```

Create the `./src/stylesheets/goodbye.scss` file

```scss
$bg-color: turquoise;
$text-color: indigo;

.goodbye {
  background-color: $bg-color;
  color: $text-color;
}
```

Change our `./src/lib.js` file and import our stylesheet files

```jsx
import React from 'react'

import text from './titles.json'
import './stylesheets/goodbye.scss'
import './stylesheets/hello.css'


export const hello = (
  <h1
    id="title"
    className="hello"
  >
    {text.hello}
  </h1>
)

export const goodbye = (
  <h1
    id="title"
    className="goodbye"
  >
    {text.goodbye}
  </h1>
)
```

We can run the `start` command again

```bash
~$ yarn start

$ ./node_modules/.bin/webpack-dev-server
 http://localhost:3000/
webpack result is served from /assets
content is served from ./dist/
Hash: 8ac9665f877d0ab27fe1
Version: webpack 1.13.3
Time: 2011ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.05 MB       0  [emitted]  main
chunk    {0} bundle.js (main) 1.02 MB [rendered]
    [0] multi main 40 bytes {0} [built]
    [1] (webpack)-dev-server/client?http://localhost:3000 3.97 kB {0} [built]
    [2] ./~/url/url.js 22.3 kB {0} [built]
    ....
```

but now we can see our stylesheets processed by our new loaders on the final of this output

```bash
   [98] ./src/lib.js 765 bytes {0} [built]
   [99] ./src/titles.json 70 bytes {0} [built]
  [100] ./src/stylesheets/goodbye.scss 1.18 kB {0} [built]
  [101] ./~/css-loader!./~/autoprefixer-loader!./~/sass-loader!./src/stylesheets/goodbye.scss 221 bytes {0} [built]
  [102] ./~/css-loader/lib/css-base.js 1.51 kB {0} [built]
  [103] ./~/style-loader/addStyles.js 7.15 kB {0} [built]
  [104] ./src/stylesheets/hello.css 1.05 kB {0} [built]
  [105] ./~/css-loader!./~/autoprefixer-loader!./src/stylesheets/hello.css 219 bytes {0} [built]
webpack: Compiled successfully.
```

We can see the result in the web browser with the new styles been applied.

![Running using webpack](./screenshots/compile-css-using-webpack.png)

## References ##

- React Doc - [Introducint to JSX][4]
- Running with httpster - [Simple http server for quick loading of content][5]
- Running with serve - [Share a project on your network by running just a command][6]
- Babel Installation- [JavaScript compiler][7]
- Babel Core - [CDN babel-core][8]
- Webpack - [Open-source JavaScript module bundler][9]

### License ###

MIT

  [1]: https://www.linkedin.com/learning/react-js-essential-training
  [2]: https://www.linkedin.com/learning/instructors/eve-porcello
  [3]: https://github.com/francisrod01
  [4]: https://reactjs.org/docs/introducing-jsx.html
  [5]: https://www.npmjs.com/package/httpster
  [6]: https://www.npmjs.com/package/serve
  [7]: https://babeljs.io/docs/setup/#installation
  [8]: https://cdnjs.com/libraries/babel-core/5.8.38
  [9]: https://webpack.js.org/guides/getting-started/
