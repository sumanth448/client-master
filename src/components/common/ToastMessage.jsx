import { Slide, Snackbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "360px",
    maxWidth: 550,
    top: 0,
  },
  errorColor: {
    backgroundColor: "#EF4242",
  },
  successColor: {
    backgroundColor: "#13AA10",
  },
  toastBlock: {
    display: "flex",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "space-betweeen",
    color: "white",
    minHeight: "4rem",
  },
  close: {
    marginTop: "12px",
    display: "flex",
    justifyContent: "flex-end",
  },
  closeButton: {
    cursor: "pointer",
    marginRight: "15px",
    marginLeft: "15px",
  },
  toastContent: {
    maxWidth: 270,
    margin: "25px 125px 25px 25px",
    fontSize: "14px",
  },
  warningIcon: {
    marginLeft: "15px",
    marginRight: "15px",
  },
  successIcon: {
    marginLeft: "15px",
    marginRight: "15px",
  },
}));

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

export const ToastMessage = (props) => {
  const classes = useStyles();
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={props.open}
        autoHideDuration={2000}
        TransitionComponent={SlideTransition}
        className={`${classes.root}`}
        onClose={props.handleClose}
      >
        <Typography
          component="div"
          className={`
          ${classes.toastBlock}
          ${
            props.props.successpopup ? classes.successColor : classes.errorColor
          }`}
        >
          {props.props.successpopup ? (
            <CheckCircleOutlinedIcon className={classes.successIcon} />
          ) : (
            <ErrorOutlineIcon className={classes.warningIcon} />
          )}
          <Typography component="div" className={classes.toastContent}>
            {props.props.content}
          </Typography>
          <Typography component="div" className={classes.close}>
            <CloseIcon
              onClick={props.handleClose}
              className={`${classes.closeButton}`}
            />
          </Typography>
        </Typography>
      </Snackbar>
    </>
  );
};
