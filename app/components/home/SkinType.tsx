import Image from "next/image";
import Link from "next/link";

import oily from "../../../public/images/homePage/Oily-Combination | Just-A-Dash.jpg";
import dry from "../../../public/images/homePage/Dry | Just-A-Dash.jpg";
import sensitive from "../../../public/images/homePage/Sensitive | Just-A-Dash.jpg";
import problematic from "../../../public/images/homePage/Problematic | Just-A-Dash.jpg";
import dull from "../../../public/images/homePage/Dull-Dark-Spots | Just-A-Dash.jpg";
import normal from "../../../public/images/homePage/Normal | Just-A-Dash.jpg";

const skins = [
  { name: "oily", picture: oily, url: "/shop/skintype=oily&prodtype=all" },
  { name: "dry", picture: dry, url: "/shop/skintype=dry&prodtype=all" },
  {
    name: "sensitive",
    picture: sensitive,
    url: "/shop/skintype=sensitive&prodtype=all",
  },
  {
    name: "problematic",
    picture: problematic,
    url: "/shop/skintype=problematic&prodtype=all",
  },
  { name: "dull", picture: dull, url: "/shop/skintype=normal&prodtype=all" },
  {
    name: "normal",
    picture: normal,
    url: "/shop/skintype=normal&prodtype=all",
  },
];

const Skintype = () => {
  return (
    <section className="shop-by-skintype">
      <h2>SHOP BY SKIN TYPE</h2>
      <div className="skintypes-container">
        {skins.map((skin) => (
          <div className="single-skintype-container" key={skin.name}>
            <Link href={skin.url}>
              <div className="skintype-txt-container">
                <h3>{skin.name}</h3>
              </div>
              <div className="skintype-img-container">
                <Image
                  src={skin.picture}
                  alt={`shop ${skin.name} range`}
                  height={170}
                  object-fit="contain"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skintype;
