import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Floats from "../components/Floats";
import bannerImage from '../images/banner.jpg'

function Home() {
  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" imageUrl={bannerImage} />
      <Floats />
      <Footer />
    </>
  );
}

export default Home;
