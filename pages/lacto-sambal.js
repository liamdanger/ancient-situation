import Layout from '../components/layout'
import Hero from '../components/hero'

const Page = ({ title }) => (
    <Layout title="Lacto-Sambal">
        <h1>Lacto-Sambal</h1>
        <Hero image="/static/lacto-sambal.jpg" caption="Look at this delicious shit" />
        <p>As the name may imply, this is a lacto-fermented sambal oelek-like chili paste.</p>
    </Layout>
)

export default Page