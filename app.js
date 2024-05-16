const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy</p>;
const NagativeMessage = () => <p>Nie możesz obejrzeć filmu jeśli masz mniej niż 16 lat!</p>

class CheckboxAgeConfirmation extends React.Component {

    state = {
        isConfirmed: false,
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed
        })
    }

    displayMessage = () => {
        if (this.state.isConfirmed) {
            return <PositiveMessage/>
        } else {
            return <NagativeMessage/>
        }
    }

    render() {
        return (
            <>
                <h1>Kub bilet na horror roku!</h1>
                <input type="checkbox" id="age" onChange={ this.handleCheckboxChange} checked={this.state.isConfirmed} />
                <label htmlFor="age">Mam co najmniej 16 lat</label>
                {this.displayMessage()}
            </>
        )
    }
}



ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"))
