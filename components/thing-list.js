import Link from 'next/link'

const ThingListItem = ({ title, image, url }) => (
    <li className="thing-list-item">
        <Link href={url}>
            <a>
                <img width="250" height="250" src={image} />
                {title}
            </a>
        </Link>
    </li>
)

const ThingList = ({ things }) => (
    <ul className="thing-list">
        {things.map(ThingListItem)}    
    </ul>
)

export default ThingList