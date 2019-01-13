import Layout from '../components/layout'
import Hero from '../components/hero'

const Page = ({ title }) => (
    <Layout title="Lacto-Sambal">
        <h1>Lacto-Sambal</h1>
        <p>As the name may imply, this is a lacto-fermented sambal-like chili paste. Despite containing a fuck-ton of chili peppers, it's not <em>that</em> spicy, and there's a gratifying amount of lemongrass and garlic that comes through. I was kind of surprised by how well balanced it turned out, and I wonder how much of that is due to the funky lacto-fermentation flavors curbing the spiciness.</p>
        <p>Grandma-ass recipe follows:</p>
        <h2>Ingredients</h2>
        <ul>
            <li>A big pile of red jalapeños, probably like 30–40.</li>
            <li>Two heads of garlic, peeled and crushed</li>
            <li>A big 'ol knob of ginger, peeled</li>
            <li>Three or so stalks of lemongrass, cut into inch-and-a-half long segments</li>
        </ul>
    </Layout>
)

export default Page
