import TwoWayBinding from './TwoWayBinding.jsx'
import FormSubmit from './FormSubmit.jsx'

function Panel({selectedPanel})
{
    switch (selectedPanel)
    {
        case "1":
            return (<TwoWayBinding />)
        case "2": 
            return (<FormSubmit />)
    }

    window.alert('Did not select panel: selectedPanel is ' + selectedPanel)
}

export default Panel