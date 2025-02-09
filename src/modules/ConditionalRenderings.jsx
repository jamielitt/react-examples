import React, { useState } from 'react'

function ConditionalRenderings()
{
    const [ifShow, setIfShow] = useState(false)
    const [terneryShow, setTerneryShow] = useState(false);
    const [booleanAndShow, setBooleanAndShow] = useState(false);

    function handleIfShow()
    {
        setIfShow(prevValue => { return !prevValue });
    }

    function handleTerneryShow()
    {
        setTerneryShow(prevValue => { return !prevValue });
    }

    function handleBooleanAndShow()
    {
        setBooleanAndShow(prevValue => { return !prevValue});
    }

    let ifContent = null;

    if (ifShow)
        ifContent = <div class="card card-body">If Content Shown</div>

    return(
        <>
        <h2>Conditional Rendering Examples</h2>
        <div>
            <div class="card card-body">
                <h4>Example 1:</h4> Conditional Rendering using if-else
                <div>
                    <button onClick={handleIfShow}>{ifShow ? "Hide" : "Show"} If Content</button>
                    {ifContent}
                </div>
            </div>
            <div class="card card-body">
                <h4>Example 2:</h4> Using a ternery operator
                <div>
                    <button onClick={handleTerneryShow}>{terneryShow ? "Hide" : "Show"} Ternery Content</button>
                    {terneryShow ? <div class="card card-body">Ternnery Content Shown</div> : null}
                </div>
            </div>
            <div class="card card-body">
                <h4>Example 3:</h4> Using the Boolean And &amp;&amp;
                <div>
                    <button onClick={handleBooleanAndShow}>{booleanAndShow ? "Hide" : "Show"} Boolean And Content</button>
                    {booleanAndShow && <div class="card card-body">Boolean And Content Shown</div>}
                </div>
            </div>
        </div>
        </>
    )
}

export default ConditionalRenderings