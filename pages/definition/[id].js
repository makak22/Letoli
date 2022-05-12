import React from 'react'
import { useRouter } from "next/router"
import words from "../../public/data/database.json"
//<div>The dynamic route is {id}</div>
function Definitions() {
    const router = useRouter()
    const {query: { id },} = router
    const idNum = parseInt(id) -1
    const mots = words.data

    return(

        <div className="defContainer">

            <div className="defHeader">
              <h1 className="defDetails defDef ">{mots[idNum].attributes.mot}</h1>
            </div>
            
            <div className="defMot">  
                <div>
                    <div>
                        <h1 className="defTitle">Définition</h1>
                        <h3 className="defDetails defMain">{mots[idNum].attributes.definition[1]}</h3>
                        <h3 className="defDetails defEx">{mots[idNum].attributes.definitionEx[1]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Synonymes</h1>
                        <h3 className="defDetails">{mots[idNum].attributes.synonymes[1]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Expression</h1>
                        <h3 className="defDetails">{mots[idNum].attributes.expression[1]}</h3>
                    </div>
                </div>  
            </div>
                {mots[idNum].attributes.definition[2] != null && 
            
                <div className="defMot">
                    <div>
                        <h1 className="defTitle">Définition</h1>
                        <h3 className="defDetails defMain">{mots[idNum].attributes.definition[2]}</h3>
                        <h3 className="defDetails defEx">{mots[idNum].attributes.definitionEx[2]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Synonymes</h1>
                        <h3 className="defDetails">{mots[idNum].attributes.synonymes[2]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Expression</h1>
                        <h3 className="defDetails">{mots[idNum].attributes.expression[2]}</h3>
                    </div>
                </div> 
                }
                {mots[idNum].attributes.definition[3] != null && 
                <div className="defMot">
                    <div>
                        <h1 className="defTitle">Définition</h1>
                        <h3 className="defDetails defMain">{mots[idNum].attributes.definition[3]}</h3>
                        <h3 className="defDetails defEx">{mots[idNum].attributes.definitionEx[3]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Synonymes</h1>
                        <h3 className="defDetails">{mots[idNum].attributes.synonymes[3]}</h3>
                    </div>
                    <div>
                        <h1 className="defTitle">Expression</h1>
                        <h3 className="defDetails">{mots[idNum].attributes.expression[3]}</h3>
                    </div>
                </div>
                } 
            </div>        
        
    ) 
}

export default Definitions;

