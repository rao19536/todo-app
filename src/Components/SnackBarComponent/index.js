import * as React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({message, isOpen, callbackFunc}) {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
    callbackFunc(false)
  };

  React.useEffect(()=>{
    console.log('isOpen=>', isOpen)
    if(isOpen) handleClick()
  },[isOpen])

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
