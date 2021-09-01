import Head from 'next/head'

export default function Layout({children}) {

    return (
        <div>
        <Head>
            <title>Designo</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="Description" content="Designo" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
          </Head>
            
            <main>
                {children}
            </main>
           
        </div>
    )
}