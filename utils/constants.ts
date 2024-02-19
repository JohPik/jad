export enum SKIN_TYPE {
  OILY = "oily",
  DRY = "dry",
  SENSITIVE = "sensitive",
  PROBLEMATIC = "problematic",
  NORMAL = "normal",
}

export const SkinArray = Object.values(SKIN_TYPE);

export enum PRODUCT_TYPE {
  CLEANSER = "cleanser",
  MIST = "toning_mist",
  EXFOLIANT = "exfoliant",
  SERUM = "serum",
  MOISTURISER = "moisturiser",
  TREATMENT = "treatment",
}

export const ProductArray = Object.values(PRODUCT_TYPE);

export type PRODUCT = {
  id: string;
  slug: string;
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
  image: { url: string };
  color: { hex: string };
};

export enum SLUGS {
  GOOD_BYE_SUNSHINE = "good-bye-sunshine",
  ALL_UNDER_CONTROL = "all-under-control",
  LEMON_CANDY = "lemon-candy",
  SEAL_THE_DEAL = "seal-the-deal",
  THE_POREFECT = "the-porefect",
  COOL_AS_CUCUMBER = "cool-as-cucumber",
  QUICK_FIX = "quick-fix",
  NO_HANDY_MAN = "no-handy-man",
  GREEN_COCKTAIL = "green-cocktail",
  BERRY_FRESH = "berry-fresh",
  ALL_ABOUT_MOISTURE = "all-about-moisture",
  ACAI_BOWL = "acai-bowl",
  LAND_OF_WONDERS = "land-of-wonders",
  SUNNY_DAY_IN_PARADISE = "sunny-day-in-paradise",
  EASY_AS = "easy-as",
  RESCUE_ME = "rescue-me",
  SUMMER_FRUIT_SALAD = "summer-fruit-salad",
  ESCAPE_IN_BORA_BORA = "escape-in-bora-bora",
}

export const SlugArray = Object.values(SLUGS);
