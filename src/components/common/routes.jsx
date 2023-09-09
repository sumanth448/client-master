import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MENU_ITEMS } from "../../constants/constant";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Copyright from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "12px",
  },
}));

function ApplicationRoutes(props) {
  const classes = useStyles();
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div className={classes.root}>
        <Routes>
          {MENU_ITEMS.map((ele) => (
            <Route path={ele.path} key={ele.name} element={ele.component} />
          ))}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
      <Copyright sx={{ pt: 4 }} />
    </Box>
  );
}

export default ApplicationRoutes;
