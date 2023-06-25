function Welcome(props){
    return (
        <>
        <h1>Hello {props.name} From Welcome</h1>
            <p>age: {props.age}</p>
            <p>location: {props.location}</p>
        </>
    )
}

export default Welcome