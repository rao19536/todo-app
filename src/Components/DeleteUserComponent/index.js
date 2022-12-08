import React, {useState} from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/material'
import * as Style from './style'

export default function DeleteUserComponent({userId, userObj, deleteUser, message}) {
  const [open, setOpen] = useState(false)
  
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleDelete = () =>{
    deleteUser(userObj, userId)
    setOpen(false)
  }

  return (
    <>
      <Style.StyledDelete onClick={handleClickOpen}>
          <Box
              component="img"
              sx={{
              height: '14px',
              width: '14px',
              filter: 'brightness(0) invert(1)',
              }}
              alt="The house from the offer."
              src="./assets/trash.PNG"
          />
      </Style.StyledDelete>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
