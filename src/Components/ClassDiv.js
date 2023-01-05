import React from "react";

class ClassDiv extends React.Component {
    render() {
        return  (
        <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.subtitle}</p>
            <button title={this.props.buttonText}/>
        </div>
        )
    }
}

export default ClassDiv;