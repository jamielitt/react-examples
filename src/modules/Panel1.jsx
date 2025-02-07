import React, { useState } from 'react'

function Panel1()
{
    const [input, setInput] = useState('')

    function setInputHandler(event)
    {
        setInput(event.target.value);
    }

    return (
        <>
        <div>This is a two-way binding example</div>
        <div>
            <input type="text" onChange={setInputHandler}></input>
            <p> You have entered {input}</p>
        </div>
        </>
    )
}

export default Panel1