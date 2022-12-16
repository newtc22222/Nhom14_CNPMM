import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import BoxImage from "../../../components/local/BoxImage";
import apiProducts from "../../../apis/product.api";
import convertImage from "../../../helpers/convertImage";

const Carousel = ({ productId }) => {
  const [img, setImg] = useState(0);
  const [imageList, setImageList] = useState([]);
  console.log(imageList);

  const handleChangeImg = (index) => {
    setImg(index);
  };

  const handleImageListMap = (imageList) => {
    if (imageList.length) {
      return (
        <>
          {imageList.map((image, index) => {
            console.log(image.data.data);
            const color = index === img ? "#333" : "#ccc";
            return (
              <Box
                key={index}
                sx={{
                  display: "block",
                  position: "absolute",
                  top: "calc(128px + 7vw)",
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
                <img src={convertImage(image.data.data)} alt={""} />
              </Box>
            );
          })}
        </>
      );
    }
    return <></>;
  };

  useEffect(() => {
    const callApiProductImage = async () => {
      if (productId) {
        const imageList = await apiProducts.getProductImageWithProductId(
          productId
        );
        setImageList(imageList);
      }
    };

    return () => {
      callApiProductImage();
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <BoxImage
        height="100%"
        width="100%"
        alt={"Nothing"}
        src={imageList[img]}
      />
      {handleImageListMap}
    </Box>
  );
};

export default Carousel;
