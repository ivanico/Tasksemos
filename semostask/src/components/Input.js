import React from "react";

export class Input extends React.Component {
    render() {
        return (
            <input 
                type={this.props.type} 
                placeholder={this.props.placeholder}
                name={this.props.name}
                onChange={this.props.handleChange}
            />
        )
    }
}