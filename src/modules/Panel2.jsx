function Panel2()
{
    return (
        <>
        <h2>Form Submission Example</h2>
        <div>
            <form>
                <label for="fname">First Name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">Last Name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        <div>The form you have submitted is: </div>
        <div>First Name: </div>
        <div>Last Name: </div>
        </>
    )
}

export default Panel2