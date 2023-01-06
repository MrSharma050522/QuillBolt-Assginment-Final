import React from "react";
import Carousel from "react-material-ui-carousel";
import { Typography } from "@mui/material";

export default function Slider() {
  var items = [
    {
      name: "Formal",
      description1: "Appear calm and smart with Formal mode.",
      description2: "Convey confidence and intelligence with Formal mode.",
    },
    {
      name: "Simple",
      description1: "Ensures text is straightforward and coherent.",
      description2: "Makes sure writing is clear and understandable.",
    },
    {
      name: "Creative",
      description1: "Convey creativity with the biggest changes.",
      description2: "Transmit creativity with the greatest modifications.",
    },
    {
      name: "Shorten",
      description1: "Helps to make sure you keep your text short.",
      description2: "Helps you keep your text short.",
    },
    {
      name: "Expand",
      description1: "Make your writing longer.",
      description2: "Add more words to expand your writing.",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <Typography variant="h5" sx={{ color: "green" }}>
              {item.name}
            </Typography>
            <p>
              <i>Original Text</i>
            </p>
            <Typography variant="h5">{item.description1}</Typography>
            <p>
              <i>Paraphrased Text</i>
            </p>
            <Typography variant="h5" sx={{ color: "#DAA520" }}>
              {item.description2}
            </Typography>
          </div>
        );
      })}
    </Carousel>
  );
}
