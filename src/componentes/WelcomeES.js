import React from "react";

class WelcomeES extends React.Component{
    render(){
        return(
            <>
            <h1>Hello {this.props.name} From WelcomeES</h1>
                <p>age: {this.props.age}</p>
                <p>location: {this.props.location}</p>
            </>
        )
    }
}

export default WelcomeES