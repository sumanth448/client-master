import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MENU_ITEMS } from "../../constants/constant";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function ApplicationRoutes(props) {
  return (
    <Box
      component="main"
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
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          {MENU_ITEMS.map((ele) => (
            <Route path={ele.path} element={ele.component} />
          ))}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default ApplicationRoutes;