import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from "@mui/icons-material/Delete";
import apiUsers from "../../apis/users.api";
import { toast } from "react-toastify";



const DialogDelUser = (param)=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(param);
  };

  const handleDelete=()=>{
    setOpen(false);
    console.log(param);
    apiUsers.removeUsers(param.row._id)
        .then(res => {
            toast.success("Xóa thành công")
        })
        .catch(error => {
            toast.error("Xóa thất bại!")
        })
  }

  return (
    <div>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bạn có muốn xóa hay không?"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc muốn xóa hay không?
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Hủy</Button>
          <Button onClick={handleClose}>
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DialogDelUser;