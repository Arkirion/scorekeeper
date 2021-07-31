import React, { useState, useEffect } from "react";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import PlayerCard from "./components/Card/PlayerCard";
import PlayerForm from "./components/PlayerForm/PlayerForm";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';

import theme from "../src/theme";

const players_list = [];

// TODO : create at least 1 test with this list, using cypress or jest.
// players_list = [
//   { name: "VALERIA", points: 0, colorpick: "#F8A4FF" },
//   { name: "ISMAEL", points: 0, colorpick: "#A4FFB8" },
//   { name: "VIVIANA", points: 0, colorpick: "#D7A4FF" },
//   { name: "DANIEL", points: 0, colorpick: "#A4FFFA" },
// ];

const useStyles = makeStyles((theme) => ({
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    bottom: -20,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  bodyContent: {
    marginTop: 100,
  },
}));

function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setLoading(true);
    setPlayers(players_list || []);
    setLoading(false);
  }, []);

  const addPlayer = (player) => {
    setPlayers((players) => [...players, player]);
  };

  if (loading) {
    return <h1> loading ..</h1>;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <PlayerForm addPlayer={addPlayer} classStyle={classes}/>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <div className={classes.bodyContent}>
          <Box textAlign="center" fontWeight="fontWeightBold" mb={2} fontSize="h5.fontSize">
            GAME TITLE
          </Box>
            {players.map((player) => (
              <PlayerCard {...player} />
            ))}
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
