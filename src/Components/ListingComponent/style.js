import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'

export const StyledListingCardParent = styled(Box)(()=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottom:'1px solid #e2e2e2'
}))
export const StyledNameContactParent = styled(Box)(()=>({
    padding:'10px'
}))
export const StyledfullName = styled(Typography)(()=>({
    fontWeight:600,
    fontSize:'1rem'
}))
export const StyledPhone = styled(Typography)(()=>({
    display:'flex',
    alignItems:'center',
    fontWeight:600,
    fontSize:'0.875rem',
    color:'#a7a7a6',
    marginTop:'4px',
    svg:{
        fontSize:'0.875rem',
        paddingRight:'2px'
    }
}))
export const StyledEditDeleteParent = styled(Box)(()=>({
    display:'flex',
    
}))
