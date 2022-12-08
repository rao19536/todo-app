import { styled } from '@mui/system'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export const StyledParentBox = styled(Box)(()=>({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'white',
    // border: '2px solid #000',
    boxShadow: 24,
    padding: '16px',
}))
export const StyledAddContactButton = styled(Button)(()=>({
    textTransform:'capitalize',
    fontWeight:600,
    background:'#347bf6'
}))
export const StyledTitle = styled(Typography)(()=>({
    fontSize:'20px',
    fontWeight:600,
    margin:'8px 0 5px 0'
}))
export const StyledTextField = styled(TextField)(()=>({
    // background:'white',
    width:'100%',
    marginTop:'20px',
    input:{
        height: '5px',
        fontSize:'14px',
    },
    
}))
export const StyledButtonParent = styled(Box)(()=>({
    display:'flex',
    justifyContent:'center',
    marginBottom:'10px'
}))
export const StyledButton = styled(Button)(()=>({
    width:'120px',
    display:'flex',
    justifyContent:'center',
    marginTop:'20px'
}))
export const StyledEdit = styled(Box)(()=>({
    background:'#347bf6',
    width:'30px',
    height:'30px',
    marginRight:'10px',
    borderRadius:'4px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    cursor:'pointer'
}))

export const StyledErrorMsg = styled(Typography)(()=>({
    fontSize:'12px',
    color:'red',
    paddingTop:'3px'
}))