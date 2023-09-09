import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Card from "../common/Card";
import Stack from "@mui/material/Stack";
import getStarted1 from "../../../src/assests/get_started_1.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    padding: "24px",
  },

  title: {
    paddingBottom: theme.customPadding.paddingscale24,
    fontSize: theme.customPadding.paddingscale24,
  },
  gettingStarted: {
    paddingBottom: theme.customPadding.paddingscale4,
  },
  description: {
    color: theme.themeColors.customColor.description,
  },
}));

export default function Organization() {
  const classes = useStyles();
  return (
    <>
      <Card>
        <Stack direction="row" className={`${classes.heading}`} spacing={60}>
          <Stack>
            <Typography className={classes.title}>Organization</Typography>
            <Typography className={classes.gettingStarted} variant="h6">
              Getting Started
            </Typography>
            <Typography className={classes.description}>
              A brief summary of the organization’s cloud costs and your monthly
              cloud spend on services.
            </Typography>
          </Stack>
          <Stack>
            <img src={getStarted1} alt={"loading"} />
          </Stack>
        </Stack>
      </Card>
    </>
  );
}
