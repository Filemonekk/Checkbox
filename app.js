const ValidatonMessage = (props) => {
    const { txt } = props
    return (
        <p>{txt}</p>
    )
}

const OrderForm = (props) =>
    (
        <form onSubmit={props.submit}>
            <input type="checkbox" id="age" onChange={props.change} checked={props.isConfirmed} />
            <label htmlFor="age">Mam co najmniej 16 lata</label>
            <br />
            <button type="submit">Kup bilet</button>
        </form>
    )
class TicketShop extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      })
    }
  }
  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidatonMessage txt="Możesz obejrzeć film. Zapraszamy!" />
      } else {
        return <ValidatonMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
      }
    } else { return null }
  }
  render() {
    const {isConfirmed} = this.state
    return (
      <>
            <h1>Kup bilet na horror roku!</h1>
            <OrderForm
                change={this.handleCheckboxChange}
                submit={this.handleFormSubmit}
                checked={isConfirmed} />
            {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById('root'))