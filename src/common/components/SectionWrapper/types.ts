export type NumberMediaProps = {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  "2xl"?: number;
};

export type SectionWrapperType = {
  paddingTop?: NumberMediaProps;
  paddingBottom?: NumberMediaProps;
  paddingLeft?: NumberMediaProps;
  paddingRight?: NumberMediaProps;
  overFlow?: "hidden" | "auto";
  display?: "block" | "flex";
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  height?: NumberMediaProps;
  backgroundColor?: string;
  maxWidth?: string;
};
