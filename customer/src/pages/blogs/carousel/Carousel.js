import React, { useState } from "react";
import { Box } from "@mui/material";
import BoxImage from "../../../components/local/BoxImage";

const Carousel = ({ productId }) => {
  const [img, setImg] = useState(0);
  const imageList = productId?.images || [];

  const handleChangeImg = (index) => {
    setImg(index);
  };

  return (
    <Box sx={{padding: '5px', height: '360px', boxShadow: '0 0 5px #FF8C00'}}>
      <BoxImage
        height="100%"
        alt={productId?.decription || "Nothing"}
        src={imageList[img]}
      />
      {imageList.map((image, index) => {
            const color = index === img ? "#333" : "#ccc";
            return (
              <Box
                key={index}
                sx={{
                  display: "block",
                  position: "absolute",
                  top: "37vh",
                  left: `calc(50% - (40px * ${
                    imageList.length / 2
                  }) + 40px * ${index})`,
                  width: "8px",
                  height: "8px",
                  borderRadius: "10px",
                  backgroundColor: color,
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                onClick={() => handleChangeImg(index)}
              >
              </Box>
            );
          })}
    </Box>
  );
};

export default Carousel;
