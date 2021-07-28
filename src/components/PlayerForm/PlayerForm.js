import React, { useState } from "react";

// material
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { HexColorPicker } from "react-colorful";

import "./PlayerForm.scss";

/** TODO: avoid re renderer when i write in the form? */

export default function PlayerForm({addPlayer, classStyle}) {
  const DEFAULT_COLOR = "#F8A4FF";
  const DEFAULT_PLAYER = { name: "", points: 0, colorpick: DEFAULT_COLOR };

  const [open, setOpen] = useState(false);
  const [player, setPlayer] = useState(DEFAULT_PLAYER);
  const [colorpick, setColorPick] = useState(DEFAULT_COLOR);

  const handleClickOpen = () => {
    setOpen(true);
    setPlayer(DEFAULT_PLAYER);
  };

  const handleClose = () => {
    setOpen(false);
    setPlayer(DEFAULT_PLAYER);
  };

  const savePlayer = () => {
    player.points = parseInt(player.points);
    addPlayer(player)
    handleClose();
  };

  const handlePlayerChange = (e) => {
    const { name, value } = e.target;
    setPlayer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /** this is because the color picker cant handle events, it returns a color */
  const handleColor = (color) => {
    setColorPick(color)
    setPlayer((prevState) => ({
      ...prevState,
      ['colorpick']: color,
    }));
  };


  return (
    <div className="player-form">
      <Fab className={classStyle.fabButton} onClick={handleClickOpen} color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="player-form-dialog-title"
        id="player-form"
      >
        <DialogTitle id="player-form-dialog-title">Add new player</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="value"
            label="Name"
            name="name"
            type="string"
            autoComplete="off"
            value={player.name}
            onChange={handlePlayerChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="value"
            label="Initial points"
            name="points"
            type="number"
            autoComplete="off"
            value={player.points}
            onChange={handlePlayerChange}
            fullWidth
          />
          
          <DialogContentText> Color </DialogContentText>
          {/* <HexColorPicker color={color} onChange={setColorPick} onKeyUp={() => alert('ok')}/> */}
          <HexColorPicker color={colorpick} onChange={handleColor}/>
          <DialogContentText style={{ backgroundColor : colorpick}} > &nbsp; </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={savePlayer}
            color="primary"
            variant="contained"
          >
            SAVE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
