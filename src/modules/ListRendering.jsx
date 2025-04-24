import { useState, useRef } from 'react';

function ListRendering()
{
    // This ensures that the index is persisted across renders
    // and is not reset to 0 on every render
    const index = useRef(0);

    const [items, setItems] = useState([
        { id: index.current++, name: 'Item 1' },
        { id: index.current++, name: 'Item 2' },
        { id: index.current++, name: 'Item 3' }
    ]);

    function handleAddItem(itemText)
    {
        var itemText = document.getElementById('newItem').value;
        
        if (itemText === '') {
            alert('Please enter an item name.');
            return;
        }

        const newItem = { id: index.current++, name: itemText };
        setItems(currentItems => [...currentItems, newItem]);
    }

    function handleRemoveItem(itemId)
    {
        setItems(currentItems => currentItems.filter(item => item.id !== itemId));
    }

    // This function is used to update the name of an item
    // It is called when the user clicks the update button
    function updateItemName(itemId)
    {
        // Get the new name from the input field
        // In a real application, you would probably want to use a modal or a form
        // to get the new name from the user
        var newName = document.getElementById('newItem').value;

        // Updates the name of the item with the given id
        setItems(currentItems => 
            currentItems.map(item => 
                item.id === itemId ? { ...item, name: newName } : item
            )
        );
    }

    return (
        <>
        <h2>List Rendering Example</h2>
        <div>
            <span>This is the list we currently have in our array</span>
            <ul>
                {items.map( (item) => (
                    /* By setting the items key to the id, we ensure that React can keep track of the items */
                    /* and only re-render the items that have changed */
                    /* This is important for performance reasons */
                    /* If key is not set, the items will be re-rendered every time the state changes */
                    /* This can cause performance issues if the list is large */
                    <li key={item.id}>
                        <span>{item.name} 
                            <button onClick={(e) => handleRemoveItem(item.id)}>Remove</button>
                        </span>
                        <span>
                            <button onClick={(e) => updateItemName(item.id)}>Update</button>
                        </span>

                    </li>
                ))}
            </ul>
            <div>
                <input type="text" id="newItem" placeholder="Enter new item" />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
        </div>
        </>
    );
}

export default ListRendering;