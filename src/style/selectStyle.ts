import { StylesConfig } from "react-select";

export const selectStyles: StylesConfig = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: state.isFocused ? "1px solid #cccccc" : "1px solid #cccccc",
    boxShadow: state.isFocused ? "0px 0px 6px #CBCFC3" : "none",
    "&:hover": {
      border: "1px solid #CBCFC3",
      boxShadow: "0px 0px 6px #CBCFC3",
    },
    backgroundColor: "transparent",
    height: "48px",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state?.isSelected || state?.isFocused ? "#E1E6D9" : "#fff",
    color: "#000",
  }),
};
