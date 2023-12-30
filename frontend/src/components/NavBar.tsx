import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          RTT beadandó
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Főoldal
        </Button>
        <Button color="inherit" component={Link} to="/car-crud">
          Kocsi CRUD
        </Button>
        <Button color="inherit" component={Link} to="/gallery">
          Galéria
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
