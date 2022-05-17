import Head from 'next/head';
import Suggestions  from './suggestions'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Letoli</title>
        <meta name="description" content="Le dico du Boma" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#252B39" />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' />
      </Head>

      <main>
        <Suggestions />
      </main>
      
    </div>
  )
}

