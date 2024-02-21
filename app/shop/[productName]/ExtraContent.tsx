import { PRODUCT } from "@/utils/constants";
import { useEffect, useState } from "react";

type dropdow = "description" | "ingredients" | "directions";

const ExtraContent = ({
  description,
  loveList,
  ingredients,
  directions,
}: Pick<
  PRODUCT,
  "id" | "description" | "loveList" | "ingredients" | "directions"
>) => {
  const [selectedDropdown, setSelectedDropdowm] = useState<dropdow | null>(
    null
  );

  const dropDownNodes = document.querySelectorAll(".text-dropdown");

  useEffect(() => {
    if (selectedDropdown) {
      dropDownNodes.forEach((el) => {
        el.classList.remove("open");
      });

      switch (selectedDropdown) {
        case "description":
          dropDownNodes[0].classList.add("open");
          break;
        case "ingredients":
          dropDownNodes[1].classList.add("open");
          break;
        case "directions":
          dropDownNodes[2].classList.add("open");
          break;
      }
    }
  }, [dropDownNodes, selectedDropdown]);

  return (
    <div className="extra-content-section">
      <div className="extra-content">
        <h3 onClick={() => setSelectedDropdowm("description")}>Description</h3>
        <div className="text-dropdown open">
          <p>{description}</p>
          Why we love it:
          <ul className="loveList">
            {loveList.map((loveListItem, index) => (
              <li key={index}>{loveListItem.description}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="extra-content">
        <h3 onClick={() => setSelectedDropdowm("ingredients")}>Ingredients</h3>
        <div className="text-dropdown">
          <p>{ingredients}</p>
        </div>
      </div>

      <div className="extra-content">
        <h3 onClick={() => setSelectedDropdowm("directions")}>Directions</h3>
        <div className="text-dropdown">
          <p>{directions}</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraContent;
