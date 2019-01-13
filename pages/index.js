import Layout from '../components/layout'
import ThingList from '../components/thing-list'

import things from '../things'

const Index = () => (
    <Layout title="Home">
        <p><strong>Ancient Situation</strong> a &ldquo;boutique&rdquo; <span className="quiet">(lol)</span> label for food and drinks made by <a href="http://liamcampbell.info">Liam Campbell</a>. That&rsquo;s me.</p>
        <p>Everything is extremely limited-run, since it has to come out of my little San Francisco kitchen. Nothing is FDA-approved.</p>
        <p>This site documents the stuff I&rsquo;ve made under the <strong>Ancient Situation</strong> name from 2018 on.</p>
        <ThingList things={things} />
    </Layout>
)

export default Index
