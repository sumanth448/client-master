import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Avatar } from "@mui/material";
import Card from "../common/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { QuestionAnswer, CalendarToday } from "@mui/icons-material";
import avatar1 from "../../../src/assests/50.jpg";
import avatar2 from "../../../src/assests/55.jpg";
import avatar3 from "../../../src/assests/57.jpg";
import avatar4 from "../../../src/assests/65.jpg";
import avatar5 from "../../../src/assests/76.jpg";
import avatar6 from "../../../src/assests/86.jpg";

const useStyles = makeStyles((theme) => ({
  heading: {
    padding: "24px",
  },

  gettingStarted: {
    paddingBottom: theme.customPadding.paddingscale4,
  },
  description: {
    color: theme.themeColors.customColor.description,
  },
  settings: {
    color: theme.themeColors.customColor.sidebarBackground,
  },
  buttons: {
    paddingTop: theme.customPadding.paddingscale24,
  },
}));

export default function SettingUp() {
  const classes = useStyles();
  return (
    <Card>
      <Stack direction="row" className={`${classes.heading}`} spacing={0}>
        <Stack>
          <Typography className={classes.gettingStarted} variant="h6">
            Need help setting up?
          </Typography>
          <Typography className={classes.settings} variant="body2">
            If you feel stuck please chat with us or schedule a call. Our team
            will help you configure and test your first sync from cloud provider
            to Economize. This isn't a sales call. We promise.
          </Typography>
          <Stack spacing={2} direction="row" className={classes.buttons}>
            <Button variant="outlined">
              <QuestionAnswer></QuestionAnswer> Chat with us
            </Button>
            <Button variant="outlined">
              <CalendarToday></CalendarToday> Schedule a call
            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Avatar alt="Remy Sharp" src={avatar1} />
          <Avatar alt="Travis Howard" src={avatar2} />
          <Avatar alt="Cindy Baker" src={avatar3} />
          <Avatar alt="Remy Sharp" src={avatar4} />
          <Avatar alt="Travis Howard" src={avatar5} />
          <Avatar alt="Cindy Baker" src={avatar6} />
        </Stack>
      </Stack>
    </Card>
  );
}
