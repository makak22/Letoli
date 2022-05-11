import React from "react"
import axios from "axios";

function Definition() {
   
    return (
        <div>
            <p>voici les definitions</p>  
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