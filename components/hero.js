const Hero = ({ image, caption }) => (
    <figure className="hero">
        <img src={image} alt={caption}/>
    </figure>
)

export default Hero