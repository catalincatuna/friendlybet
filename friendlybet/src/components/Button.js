import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import HorizontalNonLinearStepper from "./StepperForm";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const fullWidth = true;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" size="large" onClick={handleClickOpen}>
        Make Bet
      </Button>
      <Dialog
        maxWidth="xl"
        open={open}
        onClose={handleClose}
        style={{ borderRadius: 20 + "px" }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent maxWidth="xl">
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
          <HorizontalNonLinearStepper />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
