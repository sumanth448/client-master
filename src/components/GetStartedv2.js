import * as React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { Typography, Avatar, Accordion, AccordionSummary } from "@mui/material";
import Card from "./common/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { QuestionAnswer, CalendarToday, Link } from "@mui/icons-material";
import getStarted1 from "../../src/assests/get_started_1.svg";
import avatar1 from "../../src/assests/50.jpg";
import avatar2 from "../../src/assests/55.jpg";
import avatar3 from "../../src/assests/57.jpg";
import avatar4 from "../../src/assests/65.jpg";
import avatar5 from "../../src/assests/76.jpg";
import avatar6 from "../../src/assests/86.jpg";
import organization from "../../src/assests/organization.svg";

const useStyles = makeStyles(() => ({
  heading: {
    padding: "12px",
  },

  loader: {
    animation: "rotation 1.5s infinite linear",
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
}));

export default function GetStartedV2() {
  const classes = useStyles();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <Card>
        <div style={{ display: "flex" }}>
          <div>
            <Typography className={`${classes.heading}`} variant="h4">
              Getting Started
            </Typography>
            <h4 style={{ padding: "12px" }}>
              A brief summary of the organization’s cloud costs and your monthly
              cloud spend on services.
            </h4>
          </div>
          <div style={{ padding: "15px" }}>
            <img src={getStarted1} alt={"loading"} />
          </div>
        </div>
      </Card>
      <Card>
        <div style={{ display: "flex" }}>
          <div>
            <Typography className={`${classes.heading}`} variant="h5">
              Need help setting up?
            </Typography>
            <h5 style={{ padding: "12px" }}>
              If you feel stuck please chat with us or schedule a call. Our team
              will help you configure and test your first sync from cloud
              provider to Economize. This isn't a sales call. We promise..
            </h5>
            <Stack spacing={2} style={{ padding: "12px" }} direction="row">
              <Button variant="outlined">
                <QuestionAnswer></QuestionAnswer> Chat with us
              </Button>
              <Button variant="outlined">
                <CalendarToday></CalendarToday> Schedule a call
              </Button>
            </Stack>
          </div>
          <div style={{ padding: "15px" }}>
            <Stack direction="row" spacing={0}>
              <Avatar alt="Remy Sharp" src={avatar1} />
              <Avatar alt="Travis Howard" src={avatar2} />
              <Avatar alt="Cindy Baker" src={avatar3} />
              <Avatar alt="Remy Sharp" src={avatar4} />
              <Avatar alt="Travis Howard" src={avatar5} />
              <Avatar alt="Cindy Baker" src={avatar6} />
            </Stack>
          </div>
        </div>
      </Card>
      <Card>
        <div style={{ display: "flex" }}>
          <div>
            <Typography className={`${classes.heading}`} variant="h4">
              Welcome to Economize! 👋
            </Typography>
            <h5 style={{ padding: "12px" }}>
              With our powerful suite of tools and features, you now have the
              ability to take full control of your cloud expenses. From
              real-time cost monitoring and resource optimization to actionable
              insights and customized cost-saving recommendations, we're here to
              make sure you get the most out of your cloud investment.
            </h5>
          </div>
          <div style={{ padding: "15px" }}>
            <img src={organization} alt={"loading"} />
          </div>
        </div>
        <Stack
          sx={{
            boxShadow: 10,
            margin: 2,
            padding: 2,
            border: "1px solid grey",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseLine" }}>
            <div className={`${classes.circle}`}>
              <div style={{ padding: "5px" }}>
                <Link></Link>
              </div>
            </div>
            <div onClick={handleChange("panel1")}>
              <Typography className={`${classes.heading}`} variant="h5">
                Getting Started
              </Typography>
              <Typography className={`${classes.heading}`} variant="h6">
                Provide your relevant details to set up your Economize profile.
              </Typography>
            </div>
          </div>
        </Stack>
      </Card>
    </>
  );
}
