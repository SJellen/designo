import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import GetInTouch from './GetInTouch'

export default function Layout({children}) {

    return (
        <div>
        <Head>
            <title>Designo</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="Description" content="Designo" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
          </Head>
                <Header />
            <main>
                {children}
            </main>
                <GetInTouch />
                <Footer />
        </div>
    )
}