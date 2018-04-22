# React Components - Ski Day Count #

> Warning: Accessing `createClass` via the main React package is deprecated, and will be removed in React v16.0. Use a plain JavaScript class instead. If you're not yet ready to migrate, `create-react-class` v15.* is available on npm as a temporary, drop-in replacement.

For more info see https://fb.me/react-create-class

![Ski day count](./screenshots/ski-day-count.png)

React removed `createClass` from version 16. You can use `create-react-class` to migrate easily as shown in react documentation.

Before (15.4 and below)

```js
var React = require('react');

var Component = React.createClass({
  mixins: [MixinA],
  render() {
    return <Child />;
  }
});
```

After (15.5)

```js
var React = require('react');
var createReactClass = require('create-react-class');

var Component = createReactClass({
  mixins: [MixinA],
  render() {
    return <Child />;
  }
});
```
