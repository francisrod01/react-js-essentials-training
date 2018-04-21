# ReactJS Essentials Training #

You'll understand the essentials of React.js and be able to start building your own browser-based projects.

- Course on [LinkedIn][1] by [Eve Porcello][2]
- Author from this repo: [Francis Rodrigues][3]

## Introduction - Some questions about React ##

### React Developer Tools ###

Are available for Chrome and Firebox as well.

### Where was React created ###

Facebook

### Why would you want to install the React Developer tools ###

- to see props and state information
- to understand which components are nested inside of one another
- to view all of the React elements on the page

### Updating the DOM is fast in React because ###

React makes the minimal changes to make it an update it.

## Create React App ##

This project was bootstrapped with [Create React App][4].

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

## References ##

- Create React App on [Github][4]
- Running with httpster - [Simple http server for quick loading of content][5]
- Running with serve - [Share a project on your network by running just a command][6]

### License ###

MIT

  [1]: https://www.linkedin.com/learning/react-js-essential-training
  [2]: https://www.linkedin.com/learning/instructors/eve-porcello
  [3]: https://github.com/francisrod01
  [4]: https://github.com/facebookincubator/create-react-app
  [5]: https://www.npmjs.com/package/httpster
  [6]: https://www.npmjs.com/package/serve
