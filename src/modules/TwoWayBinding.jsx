function TwoWayBinding(props)
{
    return (
        <>
        <div>This is a two-way binding example</div>
        <div>
            <input type="text" onChange={props.inputHandler}></input>
            <p> You have entered {props.currentString}</p>
        </div>
        </>
    )
}

export default TwoWayBinding