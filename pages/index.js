import Head from 'next/head';
import Suggestions  from './suggestions'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Letoli</title>
        <meta name="description" content="Le dico du Boma" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
        <Suggestions />
      </main>
      
    </div>
  )
}

