import Link from "next/link";
import hero1 from "../../../public/images/Hero-Slider_Square_GoodBye-Sunshine_Just-A-Dash-Beauty.jpg";
import hero2 from "../../../public/images/Hero-Slider_Square_Escape-in-Bora-Bora_Just-A-Dash-Beauty.jpg";
import hero3 from "../../../public/images/Hero-Slider_Square_No-Handyman-Needed_Just-A-Dash-Beauty.jpg";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <section className="hero-slider">
      <div className="hero-img-container">
        <div className="polaroid-container first">
          <Image src={hero1} alt="Model- About Page" />
          <span>#Good Bye Sunshine</span>
        </div>
        <div className="polaroid-container second">
          <Image src={hero2} alt="Model- About Page" />
          <span>#Escape in Bora Bora</span>
        </div>
        <div className="polaroid-container third">
          <Image src={hero3} alt="Model- About Page" />
          <span>#No Handyman Needed</span>
        </div>
      </div>
      <div className="text-container">
        <h2>Natural Cosmetic version 2.0</h2>
        <h3>Embrace the nature version of yourself</h3>
        <button>
          {/* CHANGE ME! */}
          <Link href="/shop">SHOP NOW</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
