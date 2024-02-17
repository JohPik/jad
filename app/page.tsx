import HeroSlider from "./components/home/HeroSlider";
import Instagram from "./components/home/Instagram";
import OurValues from "./components/home/OurValues";
import SkinType from "./components/home/SkinType";

const Home = () => {
  return (
    <section className="home">
      <div className="animation-wrapper">
        <h1>Just A Dash Beauty</h1>
        <HeroSlider />
        <OurValues />
        <SkinType />
        <Instagram />
      </div>
    </section>
  );
};

export default Home;
