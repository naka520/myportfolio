import React from "react";
import "./../App.css";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar variant="dense" className="border-zinc-700">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            className="italic"
          >
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <div className="border-2">aiueo</div> */}
    </div>
  );
}

export default Header;
