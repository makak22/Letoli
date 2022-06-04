import React from "react"
import { toli } from '../public/data/ladatabase';
import Link from 'next/link'


function Suggestions() {
   
    const mots = toli
    
    return (
        <div className="sugContainer">
            {mots.map((mot) => (
            <div key={mot.id}>
              <Link href={`definition/${mot.id}`}>
                  <div className="aSensContainer">
                    <h1 className="leMot">{mot.attributes.mot}</h1>
                    {mot.attributes.definition[2] != null && <h3 className="sens">Sens 1</h3>}
                    <h3 className="defDetails">{mot.attributes.definition[1]}</h3>
                    <h3 className="defDetails defEx">{mot.attributes.definitionEx[1]}</h3> 
                    
                    <div>
                    {mot.attributes.definition[2] != null && <h3 className="sens">Sens 2</h3>}
                      <h3 className="defDetails">{mot.attributes.definition[2]}</h3>
                      <h3 className="defDetails defEx">{mot.attributes.definitionEx[2]}</h3>
                    </div>
                    
                    <div>
                      {mot.attributes.definition[3] != null && <h3 className="sens">Sens 3</h3>}
                      <h3 className="defDetails">{mot.attributes.definition[3]}</h3>
                      <h3 className="defDetails defEx">{mot.attributes.definitionEx[3]}</h3>   
                    </div>
    
                  </div>
              </Link>
            </div>
            ))}
        </div>
      )
}

export default Suggestions;

