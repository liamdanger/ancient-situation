import "../styles.scss"
import Head from 'next/head'
import Header from './header'

const Layout = ({ title, children }) => (
    <div className="layout">
        <Head>
            <title>Ancient Situation | {title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <main>
            {children}
        </main>
    </div>
)

export default Layout