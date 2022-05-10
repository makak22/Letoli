import React from "react"
import axios from "axios";

function Definition({words}) {
    console.log(words)
    return (
        <div>
            <p>voici les definitions</p>
            <h1>{words[0].id}</h1>
           
        </div>
        
    )
}

export default Definition;

export async function getStaticProps() {
    const wordsRes = await axios.get('http://localhost:1337/api/words');
    
    return {
      props:{
        words: wordsRes.data
      }
    }
  }