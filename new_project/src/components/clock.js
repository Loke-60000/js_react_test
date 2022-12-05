import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
          <div>
            <h1>it's ... {this.state.date.toLocaleTimeString()}?</h1>
          </div>
        );        
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.clock(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      clock() {    this.setState({      date: new Date()    });  }
}

export default Clock;
