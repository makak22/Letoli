import axios from 'axios';
import React from 'react';

function Mots({words}) {
  console.log(words)
  return (
    <div>
        <p>sss</p>
        <p>wwsww</p>
    </div>
  )
}
export default Mots ;

export async function getStaticProps() {
  const wordsRes = await axios.get('../public/data/database.json');

  return {
    props:{
      words: wordsRes.data
    }
  }
}