import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Card from "../common/Card";
import Stack from "@mui/material/Stack";
import { Link } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import organization from "../../../src/assests/organization.svg";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import Button from "@mui/material/Button";
import Account from "./Account";

const useStyles = makeStyles((theme) => ({
  heading: {
    padding: "24px",
  },
  circle: {
    background: "#f0f9ff",
    borderRadius: "25px",
    width: "35px",
    height: "35px",
    alignSelf: "baseline",
    boxSizing: "content-box",
    color: "rgb(27, 175, 252)",
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
  accountDetails: {
    paddingTop: theme.customPadding.paddingscale12,
    paddingLeft: theme.customPadding.paddingscale16,
  },
  collapseDetails: {
    border: `1px solid ${theme.themeColors.customColor.description}`,
    borderRadius: theme.customPadding.paddingscale8,
    marginTop: theme.customPadding.paddingscale24,
    paddingBottom: theme.customPadding.paddingscale24,
  },
  button: {
    width: "36px",
  },
  cardDisable: {
    pointerEvents: "none",
    backgroundColor: theme.themeColors.customColor.disabledColor,
  },
}));

export default function Welcome() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [accountEnable, setAccountEnable] = React.useState(false);

  return (
    <Card>
      <Stack direction="row" className={`${classes.heading}`} spacing={50}>
        <Stack>
          <Typography className={classes.gettingStarted} variant="h6">
            Welcome to ........! 👋
          </Typography>
          <Typography className={classes.settings} variant="body2">
            With our powerful suite of tools and features, you now have the
            ability to take full control of your cloud expenses. From real-time
            cost monitoring and resource optimization to actionable insights and
            customized cost-saving recommendations, we're here to make sure you
            get the most out of your cloud investment.
          </Typography>
        </Stack>

        <img src={organization} alt={"loading"} />
      </Stack>
      <Stack direction="column" className={`${classes.heading}`} spacing={2}>
        <div className={classes.collapseDetails}>
          <Stack spacing={2} direction="row" className={classes.accountDetails}>
            <div className={`${classes.circle}`}>
              <div style={{ padding: "5px" }}>
                <Link></Link>
              </div>
            </div>
            <Stack>
              <Typography
                className={classes.gettingStarted}
                variant="h6"
                onClick={() => setExpanded(!expanded)}
              >
                Complete your account details
              </Typography>
              <Typography className={classes.description} variant="body2">
                Provide your relevant details to set up your profile.
              </Typography>
              {expanded ? (
                <>
                  <TextField
                    label="Name"
                    id="filled-start-adornment"
                    sx={{ marginTop: "36px", width: "65ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon fontSize="small" color="info" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    label="Phone Number"
                    id="filled-start-adornment"
                    sx={{ marginTop: "36px", width: "65ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon fontSize="small" color="info" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    label="Organization"
                    id="filled-start-adornment"
                    sx={{
                      marginTop: "36px",
                      marginBottom: "36px",
                      width: "65ch",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BusinessIcon fontSize="small" color="info" />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={() => {
                      setExpanded(false);
                      setAccountEnable(true);
                    }}
                  >
                    Next
                  </Button>
                </>
              ) : (
                <></>
              )}
            </Stack>
          </Stack>
        </div>
        <div
          className={`${classes.collapseDetails} ${
            accountEnable ? "" : classes.cardDisable
          }`}
        >
          <Account />
        </div>
      </Stack>
    </Card>
  );
}
