import { toli } from '../../public/data/ladatabase';
import Head from 'next/head';
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
    <div> 
        <Head>
            <title>{mot.attributes.mot}</title>
            <meta name="description" content={mot.attributes.definition[1]} />
            <meta name="google-site-verification" content="uq71f8h7iEOhXgFST7h6wtNHE3jeyGa_rxV6mF1qVo4" />
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
            <link rel="icon" href="/favicon.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icon-192x192.png" />
            <meta name="theme-color" content="#252B39" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-touch-fullscreen" content="yes" />
            <meta name="apple-mobile-web-app-title" content="Letoli" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' media='(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' media='(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' media='(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' />
            <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' />
            </Head>
        <div className="defContainer">
    
        <div className="defHeader">
            <h1 className="defDetails defDef ">{mot.attributes.mot}</h1>
        </div>
    
        <div className="defMot">  
            <div>
                <h1 className="defTitle">Définition</h1>
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
    </div>     

)

export default Definition;