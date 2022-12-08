import { Box } from '@mui/system'
import { styled } from '@mui/system'

export const StyledBox = styled(Box)(()=>({
    display:'flex',
    height:'85vh',
    alignItems:'center',
}))
export const StyledApiFaild = styled('div')({
    width:'100%',
    padding:'100px',
    fontSize:'30px',
    fontWeight:700,
    textAlign:'center',
    boxShadow:'0px 10px 20px 2px rgba(0, 0, 0, 0.25)'
})