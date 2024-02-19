export enum SKIN_TYPE {
  OILY = "oily",
  DRY = "dry",
  SENSITIVE = "sensitive",
  PROBLEMATIC = "problematic",
  NORMAL = "normal",
}

export enum PRODUCT_TYPE {
  CLEANSER = "cleanser",
  MIST = "toning_mist",
  EXFOLIANT = "exfoliant",
  SERUM = "serum",
  MOISTURISER = "moisturiser",
  TREATMENT = "treatment",
}

export type PRODUCT = {
  id: string;
  name: string;
  subDescription: string;
  skinType: SKIN_TYPE[];
  productType: PRODUCT_TYPE;
  description: string;
  loveList: string[];
  directions: string;
  ingredients: string;
  size: string;
  price: number;
  image: {
    url: string;
  };
};
