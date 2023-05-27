import Hero from '../hero/Hero';


const Home = ({ animes }) => {
    return (
        <div>
            <Hero animes={animes} />
        </div>
    )
}

export default Home