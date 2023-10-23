import { useState } from "react";
import {
  Container, Fade,
  Stack, Typography
} from "@mui/material";
import {
  boxContainer, box, close,
  imageContainer, boxTitle, ColorButton
} from "./styles";

const Boxes = ({ data }) => {
  const [modalSrc, setModalSrc] = useState(false);

  return (
    <Container sx={boxContainer} >
      {data.map((item) => (
        <Stack key={item.id} sx={box}>
          <img
            src={item.thumbnailUrl}
            alt="150px img"
            style={{ borderRadius: "14px" }}
            onClick={() => setModalSrc(item.url)}
          />
          {modalSrc === item.url
            &&
            <Fade in={!!modalSrc}>
              <Stack sx={imageContainer}>
                <ColorButton
                  sx={close}
                  variant="contained"
                  onClick={(e) => {
                    e.stopPropagation()
                    setModalSrc(!modalSrc)
                  }}
                >
                  close
                </ColorButton>
                <img
                  style={{ borderRadius: "20px" }}
                  src={item.url}
                  alt="600px img"
                />
              </Stack>
            </Fade>
          }
          <Typography sx={boxTitle}>
            {item.title}
          </Typography>
        </Stack>
      ))
      }
    </Container>
  );
};

export default Boxes;
