import * as React from "react";
import Box from "@mui/material/Box";
import { Card as MuiCard } from "@mui/material";

export default function Card(props) {
  return (
    <>
      <Box
        sx={{
          display: "flex-row",
        }}
      >
        <MuiCard sx={{ width: "100%", marginBottom: "12px" }}>
          {props.children}
        </MuiCard>
      </Box>
    </>
  );
}
