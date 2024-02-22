import { PRODUCT_TYPE, SKIN_TYPE } from "@/utils/constants";

type FilterProps = {
  skinParam?: SKIN_TYPE;
  productParam?: PRODUCT_TYPE;
  showFilter: boolean;
};

export const Filter = ({
  skinParam,
  productParam,
  showFilter,
}: FilterProps) => {
  return (
    <div className={`filter ${showFilter ? "visible" : ""}`}>
      <h3>Filter</h3>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus
        ipsa, hic recusandae ad inventore! Eos fuga vel qui eum, aspernatur id
        placeat deleniti, quam officiis neque ducimus maiores maxime!
      </p> */}
    </div>
  );
};
