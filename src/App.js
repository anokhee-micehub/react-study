import React from "react";
import {
  Box,
  Button,
  capitalize,
  Chip,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import MaterialCard from "./components/MaterialCard";
import { alpha, Stack } from "@mui/system";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ButtonsPage } from "./pages/ButtonsPage";
import PaletteDisplay from "./components/PaletteDisplay";
import { CardsPage } from "./pages/CardsPage";
import CardDisplay from "./components/CardDisplay";
import { PortfolioPage } from "./pages/PortfolioPage";

const muiTheme = createTheme({
  palette: {
    primary: {
      light: "#F27289",
      main: "#F23D3D",
      dark: "#8C2323",
      contrastText: "#FFFFFF",
    },
    brand: {
      light: "#0041E6",
      main: "#00237F",
      dark: "#00071A",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    h6: {
      fontFamily: ["Jua", "sans-serif"].join(","),
      padding: "0.5rem 1rem",
      borderRadius: "0.25rem",
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  components: {
    MuiChip: {
      defaultProps: {
        variant: "outlined",
        color: "primary",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          transition: theme.transitions.create(["all"]),
          "&:hover": {
            transform: `translateY(${theme.spacing(-0.5)})`,
            backgroundColor: theme.palette[ownerState.color].main,
            boxShadow: `0 ${theme.spacing(0.5)} 0 0 ${theme.palette[ownerState.color].dark}`,
            transition: theme.transitions.create(["all"], { duration: 150 }),
            ...(ownerState.variant === "soft" && {
              color: "#ffffff",
            }),
          },
          "&:active": {
            transform: `translateY(0)`,
            backgroundColor: theme.palette[ownerState.color].light,
            boxShadow: `0 0 0 0 ${theme.palette[ownerState.color].dark}`,
          },
        }),
      },
      variants: [
        {
          props: { variant: "soft" },
          style: ({ ownerState, theme }) => ({
            backgroundColor: alpha(theme.palette[ownerState.color].main, 0.2),
            color: theme.palette[ownerState.color].dark,
            fontWeight: theme.typography.fontWeightBold,
          }),
        },
      ],
    },
  },
});

muiTheme.typography.h6 = {
  ...muiTheme.typography.h6,
  color: muiTheme.palette.primary.main,
  [`${muiTheme.breakpoints.up("laptop")}`]: {
    color: "#FFFFFF",
    backgroundColor: muiTheme.palette.primary.dark,
    "&:hover": {
      backgroundColor: muiTheme.palette.primary.main,
    },
  },
};

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Typography variant="h3">홈페이지</Typography>} />
        <Route path="cards" element={<CardsPage />}>
          <Route path=":param" element={<CardDisplay />} />
        </Route>
        <Route path="buttons" element={<ButtonsPage />}>
          <Route path=":variant" element={<PaletteDisplay />} />
        </Route>
        <Route path="chip" element={<Chip label="React Router" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="portfoilo" element={<PortfolioPage />} />
    </Routes>
  </ThemeProvider>
);

export default App;
