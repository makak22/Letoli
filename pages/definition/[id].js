import { toli } from '../../public/data/ladatabase';
import React from 'react'

export const getStaticProps = async ({params}) => {
    const tolis = toli.filter(mot => mot.id.toString() === params.id)
    return {
        props: {
            mot: tolis[0]
        },
    }
}

export const getStaticPaths = async() => {
    const paths = toli.map(toli=>({
        params: {id: toli.id.toString()},
    }))
    return{ paths, fallback: false}
}

const Definition = ({mot}) =>(

    <div className="defContainer">

    <div className="defHeader">
      <h1 className="defDetails defDef ">{mot.attributes.mot}</h1>
    </div>
    
    <div className="defMot">  
            <div>
                <h1 className="defTitle">Définition</h1>
                <h4>{mot.attributes.nature}{mot.attributes.genre}</h4>
                <h3 className="defDetails defMain">{mot.attributes.definition[1]}</h3>
                <h3 className="defDetails defEx">{mot.attributes.definitionEx[1]}</h3>
            </div>
            <div>
                <h1 className="defTitle">Synonymes</h1>
                <h3 className="defDetails">{mot.attributes.synonymes[1]}</h3>
            </div>
            <div>
                <h1 className="defTitle">Expression</h1>
                <h3 className="defDetails">{mot.attributes.expression[1]}</h3>
            </div>
          
    </div>
    
        {mot.attributes.definition[2] != null && 
    
        <div className="defMot">
            <div>
                <h1 className="defTitle">Définition</h1>
                <h3 className="defDetails defMain">{mot.attributes.definition[2]}</h3>
                <h3 className="defDetails defEx">{mot.attributes.definitionEx[2]}</h3>
            </div>
            <div>
                <h1 className="defTitle">Synonymes</h1>
                <h3 className="defDetails">{mot.attributes.synonymes[2]}</h3>
            </div>
            <div>
                <h1 className="defTitle">Expression</h1>
                <h3 className="defDetails">{mot.attributes.expression[2]}</h3>
            </div>
        </div> 
        }
        {mot.attributes.definition[3] != null && 
        <div className="defMot">
            <div>
                <h1 className="defTitle">Définition</h1>
                <h3 className="defDetails defMain">{mot.attributes.definition[3]}</h3>
                <h3 className="defDetails defEx">{mot.attributes.definitionEx[3]}</h3>
            </div>
            <div>
                <h1 className="defTitle">Synonymes</h1>
                <h3 className="defDetails">{mot.attributes.synonymes[3]}</h3>
            </div>
            <div>
                <h1 className="defTitle">Expression</h1>
                <h3 className="defDetails">{mot.attributes.expression[3]}</h3>
            </div>
        </div>
        } 
    </div>        

)

export default Definition;