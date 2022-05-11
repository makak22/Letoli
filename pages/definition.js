import React from "react"
import words from "../public/data/database.json"


function Definition() {
   const idNum = 1;
    return (
        <div className="defContainer">

            <div className="defHeader">
              <h1 className="defDetails defDef ">{words.data[idNum].attributes.mot}</h1>
            </div>
            
          <div className="defMot">  
            <div>
              <h2 className="defTitle">Définition</h2>
              <h3 className="defDetails defMain">{words.data[idNum].attributes.definition}</h3>
              <h3 className="defDetails defEx">{words.data[idNum].attributes.definitionEx}</h3>
            </div>
            <div>
              <h2 className="defTitle">Synonymes</h2>
              <h3 className="defDetails">{words.data[idNum].attributes.synonymes}</h3>
            </div>
            <div>
              <h2 className="defTitle">Expression</h2>
              <h3 className="defDetails">{words.data[idNum].attributes.expression}</h3>
            </div>
          </div>  
            
        </div>
        
    )
}

export default Definition;
