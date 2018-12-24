import Link from 'next/link'

const Header = () => (
    <header>
        <Link href="/">
            <a>
                <img 
                    className="logo"
                    src="/static/ancient-situation-logo.svg"
                    alt="Ancient Situation"
                />
            </a>
        </Link>
    </header>
)

export default Header