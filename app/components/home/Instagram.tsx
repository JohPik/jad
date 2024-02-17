import Image from "next/image";
import insta1 from "../../../public/images/instagram/Instagram-1.jpg";
import insta2 from "../../../public/images/instagram/Instagram-2.jpg";
import insta3 from "../../../public/images/instagram/Instagram-3.jpg";
import insta4 from "../../../public/images/instagram/Instagram-4.jpg";
import insta5 from "../../../public/images/instagram/Instagram-5.jpg";
import insta6 from "../../../public/images/instagram/Instagram-6.jpg";

const Instagram = () => (
  <section className="instagram">
    <h2>
      FOLLOW US ON INSTAGRAM <span>#justadashbeauty</span>
    </h2>
    <div className="insta-picts-container">
      <div className="insta-picts">
        <Image src={insta1} alt="Instagram" />
      </div>
      <div className="insta-picts">
        <Image src={insta2} alt="Instagram" />
      </div>
      <div className="insta-picts">
        <Image src={insta3} alt="Instagram" />
      </div>
      <div className="insta-picts">
        <Image src={insta4} alt="Instagram" />
      </div>
      <div className="insta-picts">
        <Image src={insta5} alt="Instagram" />
      </div>
      <div className="insta-picts">
        <Image src={insta6} alt="Instagram" />
      </div>
    </div>
  </section>
);

export default Instagram;
