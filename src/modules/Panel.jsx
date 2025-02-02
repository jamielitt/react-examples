import Panel1 from './Panel1.jsx'
import Panel2 from './Panel2.jsx'

function Panel({selectedPanel})
{
    switch (selectedPanel)
    {
        case "1":
            return (<Panel1 />)
        case "2": 
            return (<Panel2 />)
    }

    window.alert('Did not select panel: selectedPanel is ' + selectedPanel)
}

export default Panel