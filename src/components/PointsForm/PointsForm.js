import React, { useState } from "react";
import { OPERATIONS } from "../../enum";

// material
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function PointsForm({ sign, setPoints, currentPoints }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();

  const handleClickOpen = () => {
    setOpen(true);
    setValue();
  };
  const handleClose = () => {
    setOpen(false);
    setValue();
  };

  const handleSum = (value) => {
    if (sign == OPERATIONS.ADD) {
      setPoints((prevCount) => prevCount + value);
    } else if (sign == OPERATIONS.SUBSTRACT) {
      setPoints((prevCount) => prevCount - value);
    }
    handleClose();
  };

  const showResult = (value) => {
    value = parseInt(value);
    if (sign === OPERATIONS.ADD) {
      return value + currentPoints;
    }
    if (sign === OPERATIONS.SUBSTRACT) {
      return currentPoints - value;
    }
    return "";
  };

  return (
    <>
      <div onClick={handleClickOpen}>{sign}</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {sign == OPERATIONS.ADD ? "Add" : "Substract"} points
        </DialogTitle>
        {/* {console.log(currentPoints)} */}
        <DialogContent>
          <DialogContentText>
            Current : <strong>{currentPoints} </strong>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="value"
            label="Points"
            type="number"
            autoComplete="off"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
            fullWidth
          />
          <DialogContentText>{`Result : ${
            value ? showResult(value).toString() : currentPoints
          }`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleSum(value)}
            color="primary"
            variant="contained"
          >
            SAVE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
