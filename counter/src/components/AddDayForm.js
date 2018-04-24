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
    console.log('date', this.refs.date.value)
    console.log('powder', this.refs.powder.checked)
    console.log('backcountry', this.refs.backcountry.checked)
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

        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            required
            defaultValue={date}
            ref="date"
          />
        </div>

        <div>
          <input
            id="powder"
            type="checkbox"
            defaultChecked={powder}
            ref="powder"
          />
          <label htmlFor="powder">Powder Day</label>
        </div>
            
        <div>
          <input
            id="backcountry"
            type="checkbox"
            defaultChecked={backcountry}
            ref="backcountry"
          />
          <label htmlFor="backcountry">Backcountry Day</label>
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
