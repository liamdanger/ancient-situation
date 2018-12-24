import Layout from '../components/layout'
import ThingList from '../components/thing-list'

const Index = () => ( 
    <Layout title="Home">
        <p><strong>Ancient Situation</strong> is the label I put on food and drinks that I make and give out to folks.</p>
        <p>Everything is extremely limited-run, since it has to come out of my little San Francisco kitchen.</p>
        <p>This site documents the stuff I&rsquo;ve made under the <strong>Ancient Situation</strong> brand from 2018 on.</p>
        <ThingList things={[
            { title: 'Lacto-Sambal', url: '/lacto-sambal', image: '/static/lacto-sambal.jpg' },
        ]} />
    </Layout>
)

export default Index