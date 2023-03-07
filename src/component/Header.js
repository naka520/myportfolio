import React from "react";
import "./../App.css";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
