import { purple } from "@mui/material/colors";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const ColorButton = styled(Button)(() => ({
  backgroundColor: purple[450],
  "&:hover": {
    backgroundColor: purple[600],
  },
}));

const boxContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: "2rem",
  marginBottom: "2rem",
  wordBreak: "keep-all",
  gap: "2.5rem",
  "@media screen and (min-width: 1900px)": {
    marginTop: "7rem",
    marginBottom: "6rem",
  },
};

const box = {
  border: "1px solid #ccc",
  borderRadius: "14px",
  cursor: "pointer",
  padding: "10px",
  width: "min(100%, 200px)",
  textAlign: "center",
};

const imageContainer = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 1,
};

const close = {
  position: "relative",
  top: "7%",
  left: "15%",
  cursor: "pointer",
  fontSize: "16px",
  borderRadius: "8px",
  letterSpacing: "1px",
  border: "none",
  padding: "5px 20px",
  "@media screen and (min-width: 1900px)": {
    top: "6%",
    left: "12%",
  },
};

const boxTitle = {
  position: "relative",
  top: "7px",
  zIndex: -1,
};

export { boxContainer, box, imageContainer, close, boxTitle, ColorButton };
