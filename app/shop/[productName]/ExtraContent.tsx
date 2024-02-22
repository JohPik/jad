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
  const dropDownHeading = document.querySelectorAll(".extra-content h3");

  useEffect(() => {
    if (selectedDropdown) {
      dropDownNodes.forEach((el) => {
        el.classList.remove("open");
      });
      dropDownHeading.forEach((el) => {
        el.classList.add("closed");
      });

      switch (selectedDropdown) {
        case "description":
          dropDownNodes[0].classList.add("open");
          dropDownHeading[0].classList.remove("closed");
          break;
        case "ingredients":
          dropDownNodes[1].classList.add("open");
          dropDownHeading[1].classList.remove("closed");
          break;
        case "directions":
          dropDownNodes[2].classList.add("open");
          dropDownHeading[2].classList.remove("closed");
          break;
      }
    }
  }, [dropDownNodes, selectedDropdown, dropDownHeading]);

  return (
    <div className="extra-content-section">
      <div className="extra-content">
        <h3 onClick={() => setSelectedDropdowm("description")}>Description</h3>
        <div className="text-dropdown open">
          <p>{description}</p>
          Why we love it:
          <ul className="loveList">
            {loveList.map(({ description }, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="extra-content">
        <h3
          onClick={() => setSelectedDropdowm("ingredients")}
          className="closed"
        >
          Ingredients
        </h3>
        <div className="text-dropdown">
          <p>{ingredients}</p>
        </div>
      </div>

      <div className="extra-content">
        <h3
          onClick={() => setSelectedDropdowm("directions")}
          className="closed"
        >
          Directions
        </h3>
        <div className="text-dropdown">
          <p>{directions}</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraContent;
