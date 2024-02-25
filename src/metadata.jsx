/*
This file definies the website metadata tags
*/

import Head from 'next/head'

const Metadata = () => (
  <Head>
    <title>In Memory of Norma Marder</title>
    <meta
      name='description'
      content='A tribute writer and singer Norma Marder who lived an exquisite life and left a beautiful legacy.'
    />
    <link rel='icon' sizes='32x32' href='/favicon.png' />
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />

    <meta property='og:title' content='In Memory of Norma Marder - 1934-2023' />
<meta property='og:type' content='website' />
<meta property='og:url' content='https://norma-marder.vercel.app/' />
<meta property='og:image' content='https://norma-marder.vercel.app/partials/hero/background.jpg' />
<meta property='og:description' content='A tribute writer and singer Norma Marder who lived an exquisite life and left a beautiful legacy.' />
  </Head>
)

export default Metadata
