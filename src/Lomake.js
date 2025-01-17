import React from "react";

function Lomake () {
    return(
        <div>
            <form>
            <h2>Lomake</h2>
                <label>
                    Nimi:<br/><input type="text" name="name"/>
                </label>
                <br/>
                <label>
                    Numero:<br/><input type="text" name="number"/>
                </label>
                <br/>
                <label>
                    Kommentti:<br/><textarea rows="3" type="text" name="comment"/>
                </label> 
                <br/>
                <button type="submit">Lähetä</button>
            </form>
        </div>
    )
};

export default Lomake;