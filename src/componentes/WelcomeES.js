import React from "react";

class WelcomeES extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "Omar Bayoumi"
        }
    }


    render(){
        return(
            <>
            <h1>Hello {this.props.name} From WelcomeES</h1>
                <p>age: {this.props.age}</p>
                <p>location: {this.props.location}</p>
                <h6>Created By: {this.state.name}</h6>
                <button onClick={()=>{
                    this.setState({
                        name: "Omar*"
                    })
                }}>
                    Change My Name
                </button>
            </>
        )
    }
}

export default WelcomeES