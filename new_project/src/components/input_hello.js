import React, { Fragment } from 'react'

// class hello_name extends React.Component {
//     constructor(props){
//         super (props);
//         this.state = {name: ''}
// }
// }
//     render(){
//         <input type= 'text' value={this.state.name}onChange={e=> this.setState({})}/>
// }
// }


class hello_name extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <Fragment>
        <p>Hello,{this.state.value}...</p>
        <form onSubmit={this.handleSubmit}><label><input type="text" value={this.state.value} onChange={this.handleChange} /></label>
        </form>
        </Fragment>

      );
    }
  }

  export default hello_name

