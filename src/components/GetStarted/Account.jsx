import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import Button from "@mui/material/Button";
import GCP from "../../assests/GCP.svg";
import AWS from "../../assests/aws.svg";
import { toastContext } from "../../App";

const useStyles = makeStyles((theme) => ({
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
    paddingBottom: theme.customPadding.paddingscale24,
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
    width: theme.customPadding.paddingscale36,
  },
  imageAws: {
    paddingTop: theme.customPadding.paddingscale6,
    paddingRight: theme.customPadding.paddingscale12,
  },
  imageGcp: {
    paddingRight: theme.customPadding.paddingscale12,
  },
  buttons: {
    paddingTop: theme.customPadding.paddingscale24,
  },
}));

export default function Account() {
  const classes = useStyles();
  const [step, setStep] = React.useState(0);

  return (
    <Stack direction="row" spacing={20}>
      <Stack spacing={2} direction="row" className={classes.accountDetails}>
        <div className={`${classes.circle}`}>
          <div style={{ padding: "5px" }}>
            <Link></Link>
          </div>
        </div>
        <Stack>
          {step === 0 && <Platform step={step} setStep={setStep} />}
          {step === 1 && <Platform1 step={step} setStep={setStep} />}
          {step === 2 && <Platform2 step={step} setStep={setStep} />}
          {step === 3 && <Platform3 step={step} setStep={setStep} />}
        </Stack>
      </Stack>
    </Stack>
  );
}

function Platform({ step, setStep }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <Typography
        className={classes.gettingStarted}
        variant="h6"
        onClick={() => setExpanded(!expanded)}
      >
        Choose your platform
      </Typography>
      <Typography className={classes.description} variant="body2">
        Once you have signed up for an account, the next step is to connect your
        cloud accounts. Economize supports Google Cloud Platform and Amazon Web
        Services.
      </Typography>
      <Stack spacing={2} direction="row" className={classes.buttons}>
        <Button variant="outlined" onClick={() => setStep(step + 1)}>
          <img src={GCP} alt="." className={classes.imageGcp} />
          Connect GCP
        </Button>
        <Button variant="outlined" onClick={() => setStep(step + 1)}>
          <img src={AWS} alt="." className={classes.imageAws} />
          Connect AWS
        </Button>
      </Stack>
    </>
  );
}
function Platform1({ step, setStep }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <Typography
        className={classes.gettingStarted}
        variant="h6"
        onClick={() => setExpanded(!expanded)}
      >
        Do you have existing account
      </Typography>
      <Typography className={classes.description} variant="body2">
        Once you have signed up for an account, the next step is to connect your
        cloud accounts.
      </Typography>
      <TextField
        label="Name"
        id="filled-start-adornment"
        sx={{ marginTop: "12px", width: "65ch" }}
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
      <Stack spacing={2} direction="row" className={classes.buttons}>
        <Button variant="outlined" onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep(step + 1)}>
          Next
        </Button>
      </Stack>
    </>
  );
}

function Platform2({ step, setStep }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <Typography
        className={classes.gettingStarted}
        variant="h6"
        onClick={() => setExpanded(!expanded)}
      >
        Please fill the profile
      </Typography>
      <Typography className={classes.description} variant="body2">
        Once you have signed up for an account, the next step is to connect your
        cloud accounts.
      </Typography>
      <TextField
        label="Name"
        id="filled-start-adornment"
        sx={{ marginTop: "12px", width: "65ch" }}
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
      <Stack spacing={2} direction="row" className={classes.buttons}>
        <Button variant="outlined" onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep(step + 1)}>
          Next
        </Button>
      </Stack>
    </>
  );
}

function Platform3({ step, setStep }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const renderToast = React.useContext(toastContext);
  return (
    <>
      <Typography
        className={classes.gettingStarted}
        variant="h6"
        onClick={() => setExpanded(!expanded)}
      >
        Final Step
      </Typography>
      <Typography className={classes.description} variant="body2">
        Once you have signed up for an account, the next step is to connect your
        cloud accounts.
      </Typography>
      <TextField
        label="Phone Number"
        id="filled-start-adornment"
        sx={{ marginTop: "12px", width: "65ch" }}
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
      <Stack spacing={2} direction="row" className={classes.buttons}>
        <Button variant="outlined" onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            renderToast("success", "synced the data", true);
          }}
        >
          Next
        </Button>
      </Stack>
    </>
  );
}
