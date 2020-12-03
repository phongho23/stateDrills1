import React, { Component } from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false
    };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber:true
        })

        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!!'
        } else {
            return 'you\'re safe!'
        }
    }

    render() {
        return (
            <div className='RouletteGun'>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>
                    Pull the trigger!!!
                </button>
            </div>
        )
    }


}




export default RouletteGun;

/*
import React, { Component } from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        const { count } = this.state
        if (count >= 8) {
            clearInterval(this.interval)
            return 'BOOM!!!!'
        } else if (count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }
    }



    render() {
        return (
            <div className='CountdownBomb'>
            <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}

export default Bomb;




*/