import TwoWayBinding from './TwoWayBinding.jsx'
import FormSubmit from './FormSubmit.jsx'
import { useState } from 'react'

function Panel({selectedPanel})
{
    const [input, setInput] = useState('')

    function setInputHandler(event)
    {
        setInput(event.target.value);
    }

    switch (selectedPanel)
    {
        case "1":
            return (<TwoWayBinding inputHandler={setInputHandler} currentString={input}/>)
        case "2": 
            return (<FormSubmit twoWayBindingInformation={input}/>)
    }

    window.alert('Did not select panel: selectedPanel is ' + selectedPanel)
}

export default Panel