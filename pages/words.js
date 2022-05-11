import axios from 'axios';
import React from 'react';

function Words(props) {
  
  return (
    <div>
        <p>sss</p>
        <p>wwww</p>
        
    </div>
  )
}
export default Words;

export async function getStaticProps() {
    const wordsRes = await axios.get('http://localhost:1337/api/words');
    
    return {
      props:{
        words: wordsRes.data
      }
    }
  }