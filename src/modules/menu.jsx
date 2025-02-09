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
        <div class="col-4 bg-light card">
        <p>Selected menu item is {selectedPanel}</p>
            <div id="menu" class="btn-group-vertical">
                <button class={"btn btn-primary " +  (selectedPanel == '1' ? 'active' : '')} panel="1" onClick={handleSetSelectedPanelNumber}>Two way binding</button>
                <button class={"btn btn-primary " +  (selectedPanel == '2' ? 'active' : '')} panel="2" onClick={handleSetSelectedPanelNumber}>Form Submission</button>
                <button class={"btn btn-primary " +  (selectedPanel == '3' ? 'active' : '')} panel="3" onClick={handleSetSelectedPanelNumber}>Conditional Rendering</button>
            </div>
        </div>
        <div class="col-4 bg-light card">
            <div id="panel">
                <Panel selectedPanel={selectedPanel}/>
            </div>
        </div>
    </>
   )
}

export default Menu