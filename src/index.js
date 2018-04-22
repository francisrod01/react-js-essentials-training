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
    HEY WORLD!
  </h1>,
  document.getElementById('react-container')
)
