import { useRouter } from 'next/router';
import React from 'react'
import words from "../../public/data/database.json"

function Definitions() {

    const router = useRouter();
    React.useEffect(() => {
        if (router.isReady) {
      // Code using query
      const aa = router.query.id;
        console.log(router.query.id);
        }
    }, [router.isReady]);

    const idNum = 0;
    return (
        <div className="defContainer">

            <div className="defHeader">
              <h1 className="defDetails defDef ">{words.data[idNum].attributes.mot}</h1>
            </div>
            
          <div className="defMot">  
            <div>
              <h1 className="defTitle">Définition</h1>
              <h3 className="defDetails defMain">{words.data[idNum].attributes.definition[1]}</h3>
              <h3 className="defDetails defEx">{words.data[idNum].attributes.definitionEx[1]}</h3>
            </div>
            <div>
              <h1 className="defTitle">Synonymes</h1>
              <h3 className="defDetails">{words.data[idNum].attributes.synonymes[1]}</h3>
            </div>
            <div>
              <h1 className="defTitle">Expression</h1>
              <h3 className="defDetails">{words.data[idNum].attributes.expression[1]}</h3>
            </div>
          </div>  
            
        </div>
        
    )
}

export default Definitions;
