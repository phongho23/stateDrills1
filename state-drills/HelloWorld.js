import React from 'react';



class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'World'
        }
    }

    handleButtonClick = () => {
        this.setState({
            who: 'World'
        })
    }

    handleButtonClickFriend = () => {
        this.setState({
            who: 'Friend'
        })
    }

    handleButtonClickReact = () => {
        this.setState({
            who: 'React'
        })
    }

render() {
    console.log('render')
            return (
            <div>
            <p>Hello, {this.state.who}</p>
            <button onClick={this.handleButtonClick}>World</button>
            <button onClick={this.handleButtonClickFriend}>Friend </button>
            <button onClick={this.handleButtonClickReact}>React</button>
            </div>
        )
    }
}



export default HelloWorld;

/*

import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = {
            count: 0,
            step: 1
        }
    }

    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)

        this.setState({
            count: this.state.count + this.state.step
        })
    }

    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>
                    Add 1
                </button>
            </div>
        )
    }
}

export default Counter;

*/