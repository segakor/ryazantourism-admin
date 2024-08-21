export enum ELEMENT_TYPE {
  LEAD_BLOCK = "LEAD_BLOCK",
  FACT_BLOCK = "FACT_BLOCK",
  QUOTE_BLOCK = "QUOTE_BLOCK",
  LONG_READ_BLOCK = "LONG_READ_BLOCK",
  SINGLE_BLOCK = "SINGLE_BLOCK",
  TEXT_BLOCK = "TEXT_BLOCK",
  LONG_READ_ITEM_BLOCK = "LONG_READ_ITEM_BLOCK",
  LINK_BLOCK = "LINK_BLOCK",
}

export type TTemplate = {
  element: ELEMENT_TYPE;
  subElements?: {
    element: ELEMENT_TYPE;
    text?: string;
    srcImg?: string;
  }[];
  title?: string;
  text?: string;
  srcImg?: string;
};
