import classes from "./../Button/Button.module.css";
import { Typography, Button } from "@mui/material";

const Introduction = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <Typography sx={{ m: 10 }} variant="h4">
        Save time and write with confidence
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        style={{
          backgroundColor: `green`,
          borderRadius: "25px",
          fontWeight: "bolder",
          fontSize: "larger",
          cursor: "pointer",
        }}
      >
        Upgrade to QuillBot Premium
      </Button>
    </div>
  );
};

export default Introduction;
