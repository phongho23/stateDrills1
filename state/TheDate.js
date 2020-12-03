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