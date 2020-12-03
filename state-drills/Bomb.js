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

export default Bomb

/*

import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { datetime: new Date() };  //same key as new state
        console.log('constructor')
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                datetime: new Date() //same key as existing state
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {
        console.log('render')
        return (
            <div>{this.state.datetime.toLocaleString()}</div>
        )
    }
}

export default TheDate;

*/