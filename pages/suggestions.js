import React from "react"
import words from "../public/data/database.json"

function Suggestions() {
   
    const idNum = 1;
    const database = words.data;
    return (
        <div className="sugContainer">  
            <div className="aSensContainer">
                <h1 className="leMot">{database[idNum].attributes.mot}</h1>
                <h3 className="defDetails">{words.data[idNum].attributes.definition}</h3>
                <h3 className="defDetails defEx">{words.data[idNum].attributes.definitionEx}</h3>
            </div>

            <div className="aSensContainer">
                <h1 className="leMot">{words.data[idNum].attributes.mot}</h1>
                <h3 className="sens">Sens 1</h3>
                <h3 className="defDetails">{words.data[idNum].attributes.definition}</h3>
                <h3 className="defDetails defEx">{words.data[idNum].attributes.definitionEx}</h3>
                <h3 className="sens">Sens 2</h3>
                <h3 className="defDetails">{words.data[idNum].attributes.definition}</h3>
                <h3 className="defDetails defEx">{words.data[idNum].attributes.definitionEx}</h3>
            </div>

        </div>
        
    )
}

export default Suggestions;

