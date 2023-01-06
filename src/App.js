import "./App.css";
import React, { Fragment } from "react";
import Introduction from "./Components/Introduction";
import Card from "./QuillBot Power/Card";
import { Typography } from "@mui/material";
import Slider from "./Premium/Slider";
import Progress from "./Progress/Progress";
import MainDiv from "./MainDiv/MainDiv";

function App() {
  const freeDummyData = {
    dummyArr: [
      "125 words in the Paraphraser",
      "Standard and Fluency modes",
      "3 synonym options",
      "1 Freeze word or phrase",
      "1200 words in the Summarizer",
      "Faster processing speed",
      "Advanced grammar rewrites",
      "Compare Modes (Desktop only)",
      "Plagiarism Checker*",
      "Tone detection",
    ],
    text: "FREE",
    description: "No Credit Card Required",
    color: "green",
    buttonText: "Sign Up - It's Free",
  };
  const premiumDummyData = {
    dummyArr: [
      "Unlimited words in the Paraphraser",
      "Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes",
      "4 synonym options",
      "Unlimited Freeze words and phrases",
      "6000 words in the Summarizer",
      "Faster processing speed",
      "Advanced grammar rewrites",
      "Compare Modes (Desktop only)",
      "Plagiarism Checker*",
      "Tone detection",
    ],
    text: "PREMIUM",
    description: "3-Day Money-Back Guarantee",
    color: "#DAA520",
    buttonText: "Upgrade to Premium",
    premium: true,
  };

  return (
    <Fragment>
      <div className="App">
        <div className="d-flex justify-content-center align-items-center">
          <Introduction />
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            backgroundImage:
              "url(https://assets.quillbot.com/images/theme/light/premiumPage/topBg.svg)",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
            marginLeft: "-1rem",
          }}
        >
          <MainDiv />
        </div>
        <div className="d-flex justify-content-center">
          <Typography sx={{ m: 10 }} variant="h3">
            Experience the full power of QuillBot
          </Typography>
        </div>
        <div className="d-flex justify-content-center">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              maxWidth: "890px",
            }}
          >
            <Card
              dummyArr={freeDummyData.dummyArr}
              text={freeDummyData.text}
              description={freeDummyData.description}
              color={freeDummyData.color}
              buttonText={freeDummyData.buttonText}
            />
            <Card
              dummyArr={premiumDummyData.dummyArr}
              text={premiumDummyData.text}
              description={premiumDummyData.description}
              color={premiumDummyData.color}
              buttonText={premiumDummyData.buttonText}
              premium={premiumDummyData.premium}
            />
          </div>
        </div>
        <div className="mt-5 mb-5 d-flex justify-content-center">
          <Typography variant="h4">Premium Modes</Typography>
        </div>
        <div className="d-flex justify-content-center">
          <div
            style={{
              display: "block",
              width: "75%",
              height: "300px",
              boxShadow: "rgb(0 0 0 / 20%) 0px 4px 22px 0px",
              maxWidth: "890px",
              borderRadius: "3px",
              paddingTop: "20px",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            <Slider />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <Progress />
      </div>
    </Fragment>
  );
}

export default App;
