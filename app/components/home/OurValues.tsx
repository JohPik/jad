import Image from "next/image";
import vegan from "../../../public/images/pictograms/vegan.svg";
import crueltyfree from "../../../public/images/pictograms/crueltyfree.svg";
import natural from "../../../public/images/pictograms/natural.svg";
import aussie from "../../../public/images/pictograms/aussie.svg";

const OurValues = () => {
  return (
    <section className="our-values">
      <div className="our-values-container">
        <h3>OUR INGREDIENTS STANDARDS</h3>

        <div className="pictogram-main-container">
          <div className="pictogram-sub-container">
            <Image src={vegan} alt="Vegan Products - Just A Dash Beauty" />
          </div>
          <div className="pictogram-sub-container">
            <Image
              src={crueltyfree}
              alt="Cruelty Free Products - Just A Dash Beauty"
            />
          </div>
          <div className="pictogram-sub-container">
            <Image src={natural} alt="Natural Products - Just A Dash Beauty" />
          </div>
          <div className="pictogram-sub-container mobile-hide">
            <Image
              src={aussie}
              alt="Australian Products - Just A Dash Beauty"
            />
          </div>
        </div>

        <div className="ingredients bannerYes">
          <h3>YES</h3>
          <ul className="styledlistYes">
            <li>Organic Ingredients</li>
            <li>Natural Emollients &amp; Emulsifiers</li>
            <li>Bio-Active Ingredients</li>
            <li>Cosmeceutical Grade Ingredients</li>
            <li>Aromatherapy Oils</li>
          </ul>
        </div>

        <div className="ingredients bannerNo">
          <h3>NO</h3>
          <ul className="styledlistNo">
            <li>Palm Oil</li>
            <li>Parabens</li>
            <li>Sodium Lauryl Sulphate</li>
            <li>Mineral Oil</li>
            <li>Artificial Fragrances &amp; Colours</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
