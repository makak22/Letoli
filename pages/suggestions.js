import React from "react"
import { toli } from '../public/data/ladatabase';
import Link from 'next/link'
import Head from 'next/head';


function Suggestions() {
   
    const mots = toli
    
    return (
      <div>
        <Head>
          <title>Letoli</title>
          <meta name="description" content="Le dico du Boma" />
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
      </div>
      )
}

export default Suggestions;

