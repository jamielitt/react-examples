import Panel from './Panel.jsx'
import { useState } from 'react'

function Menu()
{
    // Registrt state for the selected menu item
    const [selectedPanel, setSelectedPanel] = useState('1');

    function handleSetSelectedPanelNumber(event)
    {
        var panelNumber = event.target.getAttribute('panel');
        // This is where we need to switch panels
        setSelectedPanel(panelNumber);
    }

   return (
    <>
        <p>Selected menu item is {selectedPanel}</p>
        <div class="row">
            <div class="col">
                <div id="menu" class="btn-group-vertical">
                    <button class="btn btn-primary" panel="1" onClick={handleSetSelectedPanelNumber}>Two way binding</button>
                    <button class="btn btn-primary" panel="2" onClick={handleSetSelectedPanelNumber}>Panel 2</button>
                </div>
            </div>
            <div class="col">
                <div id="panel">
                    <Panel selectedPanel={selectedPanel}/>
                </div>
            </div>
        </div>
    </>
   )
}

export default Menu