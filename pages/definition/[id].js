import React from 'react'
import { useRouter } from "next/router"
import words from "../../public/data/database.json"


function Definitions() {
    const router = useRouter();
    const {query: { id },} = router;
    const idArray = parseInt(id) -1;
    const mots = words.data
    

    return(

        <div className="defContainer">

            <div className="defHeader">
              <h1 className="defDetails defDef ">{mots[idArray].attributes.mot}</h1>
            </div>
            
            <div className="defMot">  
                    <div>
                        <h1 className="defTitle">Définition</h1>
                        <h3 className="defDetails defMain">{mots[idArray].attributes.definition[1]}</h3>
                        <h3 className="defDetails defEx">{mots[idArray].attributes.definitionEx[1]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Synonymes</h1>
                        <h3 className="defDetails">{mots[idArray].attributes.synonymes[1]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Expression</h1>
                        <h3 className="defDetails">{mots[idArray].attributes.expression[1]}</h3>
                    </div>
                  
            </div>
            
                {mots[idArray].attributes.definition[2] != null && 
            
                <div className="defMot">
                    <div>
                        <h1 className="defTitle">Définition</h1>
                        <h3 className="defDetails defMain">{mots[idArray].attributes.definition[2]}</h3>
                        <h3 className="defDetails defEx">{mots[idArray].attributes.definitionEx[2]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Synonymes</h1>
                        <h3 className="defDetails">{mots[idArray].attributes.synonymes[2]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Expression</h1>
                        <h3 className="defDetails">{mots[idArray].attributes.expression[2]}</h3>
                    </div>
                </div> 
                }
                {mots[idArray].attributes.definition[3] != null && 
                <div className="defMot">
                    <div>
                        <h1 className="defTitle">Définition</h1>
                        <h3 className="defDetails defMain">{mots[idArray].attributes.definition[3]}</h3>
                        <h3 className="defDetails defEx">{mots[idArray].attributes.definitionEx[3]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Synonymes</h1>
                        <h3 className="defDetails">{mots[idArray].attributes.synonymes[3]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Expression</h1>
                        <h3 className="defDetails">{mots[idArray].attributes.expression[3]}</h3>
                    </div>
                </div>
                } 
            </div>        
        
    ) 
}

export default Definitions;

