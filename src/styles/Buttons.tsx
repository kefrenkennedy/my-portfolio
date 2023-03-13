import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";

export const Button = styled("button", {
  height: "2.75rem",
  appearance: "none",
  background: "$whiteFixed",
  color: "$whiteFixed",
  fontWeight: "600",
  padding: "0 2rem",
  border: "2px solid $whiteFixed",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",

  variants: {
    type: {
      whatsapp: {
        borderBlockColor: "$green2",
        backgroundColor: "green",
        color: "$whiteFixed",
        "&:hover": {
          borderColor: "$grey1",
          backgroundColor: "green2",
        },
      },
      specific: {
        color: "$brand1",
        fontWeight: "bolder",
        backgroundColor: "$whiteFixed",
        "&:hover": {
          backgroundColor: "$grey3",
          borderColor: "$grey1",
        },
      },
      btLink: {
        background: "transparent",
        borderColor: "transparent",
        "&:hover": {
          borderColor: "$whiteFixed",
        },
      },
      primary: {
        background: "$brand1",
        borderColor: "$brand1",
        color: "$whiteFixed",
        "&:hover": {
          backgroundColor: "$brand2",
          borderColor: "$brand2",
        },
      },
      icon: {
        borderColor: "$grey5",
        backgroundColor: "$brand1",
        "&:hover": {
          borderColor: "$grey1",
        },
      },
      circle: {
        borderColor: "$grey1",
        backgroundColor: "$grey1",
        borderRadius: "50%",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        "&:hover": {
          borderColor: "$grey5",
        },
      },
    },
    ...colors,
  },
});
