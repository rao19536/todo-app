import { styled } from '@mui/system'
import { Container } from '@mui/system'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

export const StyledContainer = styled(Container)(()=>({
    display:'flex',
    justifyContent:'center',
    marginTop:'20px'
}))
export const StyledTitleParent = styled(Box)(()=>({
    display:'flex',
    justifyContent:'center',
}))
export const StyledTitle = styled(Typography)(()=>({
    fontWeight:700,
    fontSize:'1.25rem'
}))
export const StyledContactsParent = styled(Box)(()=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:'30px'
}))
export const StyledContactTitle = styled(Typography)(()=>({
    fontWeight:600,
    fontSize:'1.25rem'
}))

export const StyledSearchComponentParent = styled(Box)(()=>({
    marginTop:'20px',
}))

export const StyledListingContainerParent = styled(Box)(({dataLength})=>({
    background:'white',
    border:'1px solid #e2e2e2',
    borderRadius:'4px',
    marginTop:'20px',
    display:dataLength===0 ? 'flex' : '',
    alignItems:dataLength===0 ? 'center' : '',
    justifyContent:dataLength===0 ? 'center' : '',
    height:dataLength===0 ? '100px' : '',
}))
export const StyledCircularProgress = styled(CircularProgress)({
    position:'absolute',
    top:'50%',
    left:'50%'
})
export const StyledDataNotFound = styled(Typography)({
    fontWeight:700,
    fontSize:'20px'
})