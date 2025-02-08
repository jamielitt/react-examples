import React, { useState } from 'react'

function FormSubmit()
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(event)
    {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event)
    {
        setLastName(event.target.value);
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        // This can do something different here like call an API or something similar
        window.alert('First Name: ' + firstName + ' Last Name: ' + lastName);
    }

    return (
        <>
        <h2>Form Submission Example</h2>
        <div>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="fname">First Name:</label><br/>
                <input type="text" id="fname" name="fname" onChange={handleFirstNameChange}/><br/>
                <label htmlFor="lname">Last Name:</label><br/>
                <input type="text" id="lname" name="lname" onChange={handleLastNameChange}/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        <div>The form you have submitted is: </div>
        <div>First Name: {firstName}</div>
        <div>Last Name: {lastName}</div>
        </>
    )
}

export default FormSubmit