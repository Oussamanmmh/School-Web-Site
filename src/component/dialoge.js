import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const DialogeDisplay = ({ open  ,  handleOpen , onsubmit})=>{
  <Dialog open={open} handler={handleOpen} >
  <DialogHeader>Ajouter le project </DialogHeader>
  <DialogBody>
    Vous etes sur de vouloir ajouter ce projet ?
  </DialogBody>
  <DialogFooter>
    <Button
      variant="text"
      color="red"
      onClick={handleOpen}
      className="mr-1"
    >
      <span>Cancel</span>
    </Button>
    <Button variant="gradient" color="green" onClick={onsubmit}>
      <span>Confirm</span>
    </Button>
  </DialogFooter>
</Dialog>
}

export default DialogeDisplay ;