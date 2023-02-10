import * as React from "react";
import { ThemeProvider, createTheme, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { purple, blueGrey } from "@mui/material/colors";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import AdminRegisterPage from "./components/pages/AdminRegisterPage";
import CoordRegisterPage from "./components/pages/CoordRegisterPage";
import UserDashboardPage from "./components/pages/UserDashboardPage";
import AdminDashboardPage from "./components/pages/AdminDashboardPage";
import SuperadminDashboardPage from "./components/pages/SuperadminDashboardPage";
import AboutUs from "./components/pages/AboutUs";
import TargetGroceries from "./components/pages/TargetGroceries";
import TargetAmphoe from "./components/pages/TargetAmphoe";
import TeamRDUAmphoe from "./components/pages/TeamRDUAmphoe";
import TeamRDUProvince from "./components/pages/TeamRDUProvince";
import ChangwatProfile from "./components/pages/ChangwatProfile";
import RDUProvincePlan from "./components/pages/RDUProvincePlan";
import CoordDashboardPage from "./components/pages/CoordDashboardPage";
import DrugServicePage from "./components/pages/DrugServicePage";
import ThaiRDUServicePage from "./components/pages/ThaiRDUServicePage";

import Page404 from "./components/pages/Page404";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "url(" + `${process.env.PUBLIC_URL}/images/background_menu.jpg` + ")",
          width: drawerWidth,
        },
      },
    },
  },

  typography: {
    fontFamily: "Fredoka",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  spacing: 8,

  palette: {
    primary: blueGrey,
    background: {
      default: "#CFD2D6",
    },
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  //const theme = useTheme();
  //const [open, setOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header open={open} onDrawerOpen={handleDrawerOpen} />
        <Menu open={open} onDrawerClose={handleDrawerClose} />
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/adminregister" element={<AdminRegisterPage />} />
            <Route path="/coordregister" element={<CoordRegisterPage />} />
            <Route path="/userdashboard" element={<UserDashboardPage />} />
            <Route path="/coorddashboard" element={<CoordDashboardPage />} />
            <Route path="/admindashboard" element={<AdminDashboardPage />} />
            <Route path="/sadmindashboard" element={<SuperadminDashboardPage />} />
            <Route path="/drugservice" element={<DrugServicePage />} />
            <Route path="/thairdu" element={<ThaiRDUServicePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/chwprofile" element={<ChangwatProfile />} />
            <Route path="/rdupvplan" element={<RDUProvincePlan />} />
            <Route path="/groceries" element={<TargetGroceries />} />
            <Route path="/tamphoe" element={<TargetAmphoe />} />
            <Route path="/teamamphoe" element={<TeamRDUAmphoe />} />
            <Route path="/teamprovince" element={<TeamRDUProvince />} />

            <Route path="/" element={<Navigate to="/home" />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Main>
      </Box>
    </ThemeProvider>
  );
}

/* const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
); */
