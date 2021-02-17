import Banner from '../components/Banner';
import '../styles/Home.scss';
import Cards from '../components/Cards';
import TeamSection from '../components/TeamSection';
import Courses from '../components/constants/Courses';
const Home = () => {
    return (
        <>
            <Banner />
            <Cards />
            <TeamSection />
        </>
    );
};

export default Home;
