# React Components - Ski Day Count #

A project as exercise from this course.

## Version ##

- react: ^15.3.2
- react-dom: ^15.3.2
- react-icons: ^2.2.7
- react-router: ^3.0.0

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

## React Concepts ##

### Stateless Functional Component ###

Stateless functional components take in props and return JSX elements.

```jsx
...
render(
  <SkiDayCount
    total={50}
    powder={20}
    backcountry={10}
    goal={100}
  />
```

Our Stateless functional component that receive all this props is below:

```jsx
export const SkiDayCount = ({ total, powder, backcountry, goal }) => (
  <div className="ski-day-count">
    <div className="total-days">
      <span>{total}</span>
      <span>days</span>
    </div>
    <div className="powder-days">
      <span>{powder}</span>
      <span>days</span>
    </div>
    <div className="backcountry-days">
      <span>{backcountry}</span>
      <span>days</span>
    </div>
    <div>
      <span>{goal}</span>
    </div>
  </div>
)
```

### React Component ###

When passing properties to a component, strings should be passed inside by `quotes`.

```jsx
...

render(
  <SkiDayCount name="MyNAME" />
)
```

Our React component that receive props is below:

```jsx
import { Component } from 'react'

export class SkiDayCount extends Component {
  render() {
    const { name } = this.props
    return (
      <div>
        <div>My name is:</div>
        <div>{name}</div>
      </div>
    )
  }
}
```

What can you do in component methods?

- concatenate strings
- make calculations
- fetch data from APIs

Why should you use object destructuring in class components?

- to cut down on unnecessary typing

You can set up initial state in a stateless functional component?

- These functional components are `stateless` and therefore cannot have state initialized in a constructor.

### Props and State Concepts ###

PropTypes are optional but useful to set up, because they ensure that the correct types are supplied to your component properties.

What does the spread operator do in the children components?

- Pushes prop data to each child component

How can you return a specific number of components based on the data in an array?

- map over the elements in the array

What do default properties do?

- They set prop values that will be used if others are not provided.

If you have set up PropTypes for a component and a value of incorrect type is supplied, what will the result be?

- a console warning

For how many components can you set up propTypes?

- as many as you have

### Using refs in Components ###

We can use `refs` in ES6 classes as below:

```jsx
import { Component } from 'react'
import PropTypes from 'prop-types'

export class AddDayForm extends Component {
  constructor(props) {
    super(props)

    // Binders
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()

    console.log('resort', this.refs.resort.value)
  }
  render() {
    const { resort, date, powder, backcountry } = this.props

    return (
      <form onSubmit={this.handleSubmit} className="add-day-form">

        <div>
          <label htmlFor="resort">Resort Name</label>
          <input
            id="resort"
            type="text"
            required
            defaultValue={resort}
            ref="resort"
          />
        </div>

        <button>Add Day</button>
      </form>
    )
  }
}

AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2017-02-12",
  powder: true,
  backcountry: false
}

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired
}
```

### Using refs in stateless components ###

As the name says, `stateless` component doest not manage state, so we can refactor this code as below:

```jsx
import PropTypes from 'prop-types'

export const AddDayForm = ( { resort, date, powder, backcountry }) => {
  let _resort

  const handleSubmit => (event) => {
    event.preventDefault()

    console.log('resort', _resort.value)
  }
  return (
    <form onSubmit={handleSubmit} className="add-day-form">

      <div>
        <label htmlFor="resort">Resort Name</label>
        <input
          id="resort"
          type="text"
          required
          defaultValue={resort}
          ref={input => _resort => input}
        />
      </div>

      <button>Add Day</button>
    </form>
  )
}

... our prop types here.
```

### More concepts ###

- Default pros
- Validating with PropTypes
- Spread operators
