import { Box } from '@mui/system'
import { styled } from '@mui/system'

export const StyledDelete = styled(Box)(()=>({
    background:'#cb444a',
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