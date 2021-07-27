import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import PlayerCard from "./components/Card/PlayerCard";
import PlayerForm from "./components/PlayerForm/PlayerForm";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import CssBaseline from '@material-ui/core/CssBaseline';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const players_list = [
  { name: "VALERIA", points: 0, colorpick: "#F8A4FF" },
  { name: "ISMAEL", points: 0, colorpick: "#A4FFB8" },
  { name: "VIVIANA", points: 0, colorpick: "#D7A4FF" },
  { name: "DANIEL", points: 0, colorpick: "#A4FFFA" },
];

const useStyles = makeStyles((theme) => ({
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },

}));

function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setLoading(true);
    setPlayers(players_list);
    setLoading(false);
  }, []);

  const addPlayer = (player) => {
    setPlayers((players) => [
      ...players,
      player,
    ]);
  };

  if (loading) {
    return <h1> loading ..</h1>;
  }

  return (
    <>
      <CssBaseline />
      <div>
        {players.map((player) => (
          <PlayerCard {...player} />
        ))}
      </div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          {/* <PlayerForm addPlayer={addPlayer} fabStyle={classes.fabButton}/> */}
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
