import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Person4Icon from "@mui/icons-material/Person4";
import { Grid, Link, Paper, Stack, useMediaQuery } from "@mui/material";

import footerBg from "../../assets/footer-bg1.png";
import {
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const pages = [{label:"Home",url:"/"},{label:"Templates",url:"/templates"},{label:"Pricing",url:"./#pricing"}];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Logo = ({ mobile, footer }) => (
  <>
    <Person4Icon
      fontSize="large"
      color="primary"
      sx={{
        display: { xs: mobile ? "flex" : "none", md: mobile ? "none" : "flex" },
        mr: 1,
      }}
    />
    <Typography
      variant="h5"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: mobile ? "flex" : "none", md: mobile ? "none" : "flex" },
        fontWeight: 700,
        color: footer ? "#fff" : "inherit",
        textDecoration: "none",
        textTransform: "capitalize",
        flexGrow: mobile ? 1 : "initial",
      }}
    >
      JopSpice
    </Typography>
  </>
);

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const isMobile = useMediaQuery('(max-width:1200px)');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Logo />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Logo mobile />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                alignItems: "center",
                textTransform: "uppercase",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  href={page.url}
                  sx={{ my: 2, mx: 1, color: "black", display: "block" }}
                >
                  {page.label}
                </Button>
              ))}
              <Button variant="contained" size="small" sx={{ ml: 3 }}>
                Login
              </Button>
              <Button variant="contained" size="small" sx={{ ml: 1, mr: 4 }}>
                Signup
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Aemy Sharp"
                    src=""
                    sx={{
                      backgroundColor: "darkblue",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      <Paper
        sx={{
          mt: 8,
          py: 8,
          background: isMobile ? "#192057" : "transparent",
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent={"space-between"}>
            <Grid item xs={12} lg={4}>
              <Stack direction={"row"}>
                <Logo footer />
              </Stack>
              <Typography
                variant="body2"
                color="white.main"
                sx={{ my: 3, lineHeight: 2 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                ducimus voluptatibus neque illo id repellat quisquam? Autem
                expedita earum quae laborum ipsum.
              </Typography>
              <Box>
                <Stack direction={"row"} spacing={1}>
                  <IconButton sx={{pl:0}}>
                    <Facebook sx={{ color: "white.main", width:"18px", height:"18px" }} />
                  </IconButton>
                  <IconButton>
                    <Twitter sx={{ color: "white.main", width:"18px", height:"18px" }} />
                  </IconButton>
                  <IconButton>
                    <Google sx={{ color: "white.main", width:"18px", height:"18px" }} />
                  </IconButton>
                  <IconButton>
                    <Instagram sx={{ color: "white.main", width:"18px", height:"18px" }} />
                  </IconButton>
                  <IconButton>
                    <LinkedIn sx={{ color: "white.main", width:"18px", height:"18px" }} />
                  </IconButton>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} lg={2}>
              <Typography
                variant="h6"
                color="white.main"
                sx={{ fontSize: "16px", mb: 2 }}
              >
                Privacy & TCs
              </Typography>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  mb: 1,
                  display: "block",
                  lineHeight: 2,
                }}
              >
                Advertiser Agreement
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  mb: 1,
                  display: "block",
                  lineHeight: 2,
                }}
              >
                Acceptable Use Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  mb: 1,
                  display: "block",
                  lineHeight: 2,
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  mb: 1,
                  display: "block",
                  lineHeight: 2,
                }}
              >
                Technology Privacy
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  mb: 1,
                  display: "block",
                  lineHeight: 2,
                }}
              >
                Developer Agreement
              </Link>
            </Grid>
            <Grid item xs={12} lg={1}>
              <Typography
                variant="h6"
                color="white.main"
                sx={{ fontSize: "16px", mb: 2 }}
              >
                Navigation
              </Typography>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  mb: 1,
                  display: "block",
                  lineHeight: 2,
                }}
              >
                Home
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  mb: 2,
                  display: "block",
                }}
              >
                Templates
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  mb: 2,
                  display: "block",
                }}
              >
                Pricing
              </Link>
            </Grid>
            <Grid item xs={12} lg={2}>
              <Typography
                variant="h6"
                color="white.main"
                sx={{ fontSize: "16px", mb: 2 }}
              >
                Contact Us
              </Typography>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  lineHeight: 2,
                  mb: 2,
                  display: "block",
                }}
              >
                Mailing Address:xx00 E. Union Ave Suite 1100. Denver, CO 80237
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  mb: 1,
                  display: "block",
                  lineHeight: 2,
                }}
              >
                +234 90932 627
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#ccc",
                  textDecoration: "none",
                  fontFamily: "arial",
                  fontSize: "14px",
                  mb: 1,
                  display: "block",
                  lineHeight: 2,
                }}
              >
                support@yourdomain.com
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default Navigation;
