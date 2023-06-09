import React from "react";
import { Stack } from "@mui/joy";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants.js";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        postion: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
    </Stack>
  );
};

export default Navbar;
