import React from "react";
// import Button from "../Button/Button";
import classes from "./Card.module.css";
import InfoIcon from "@mui/icons-material/Info";
import {
  Typography,
  Button,
  Stack,
  List,
  ListItem,
  Divider,
  Container,
} from "@mui/material";

export default function Card(props) {
  return (
    <Container
      maxWidth="sm"
      disableGutters="true"
      className={classes.container}
      sx={{ m: 2 }}
      align="center"
    >
      <Typography
        variant="h4"
        className={classes.heading}
        style={{ backgroundColor: `${props.color}` }}
      >
        {props.premium && <i className="fa fa-diamond"> </i>}
        {props.text}
      </Typography>
      <Stack>
        <div className={classes.buttonContainer}>
          {/* <Button text={props.buttonText} color={props.color} /> */}
          <Button
            className={classes.button}
            variant="contained"
            style={{
              backgroundColor: `${props.color}`,
              borderRadius: "25px",
              fontWeight: "bolder",
              fontSize: "larger",
              cursor: "pointer",
            }}
          >
            {props.buttonText}
          </Button>
        </div>
        <List>
          <Divider />
          {props.dummyArr.map((el, i) => {
            return (
              <div key={i}>
                <ListItem
                  sx={{ paddingBlockEnd: "15px", paddingBlockStart: "15px" }}
                >
                  {props.premium && (
                    <span
                      style={{
                        color: `${props.color}`,
                        paddingRight: "10px",
                      }}
                    >
                      &#10004;
                    </span>
                  )}{" "}
                  {!props.premium &&
                    (i < 5 ? (
                      <span
                        style={{
                          color: `${props.color}`,
                          paddingRight: "10px",
                        }}
                      >
                        &#10004;{" "}
                      </span>
                    ) : (
                      <span style={{ color: "red", paddingRight: "10px" }}>
                        &#10006;
                      </span>
                    ))}
                  {el}
                  {props.premium && (
                    <InfoIcon
                      sx={{
                        color: `${props.color}`,
                        float: "right",
                        position: "absolute",
                        right: "10px",
                        cursor: "pointer",
                      }}
                    />
                    // <img src="/info-icon.png" alt="info" />
                  )}
                </ListItem>
                <Divider key={`key${i}`} />
              </div>
            );
          })}
        </List>
        <div align="center" className={classes.foot}>
          {props.description}
        </div>
      </Stack>
    </Container>
  );
}
