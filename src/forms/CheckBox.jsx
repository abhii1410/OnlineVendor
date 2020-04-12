import React, { Component } from 'react'


export class CheckBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <React.Fragment>
                <input 
                type={this.props.inputType}
                value= {this.props.inputValue}
                name={this.props.inputName}
                onChange = {this.props.inputOnChanged}
                />
            </React.Fragment>
        )
    }
}

export default CheckBox
