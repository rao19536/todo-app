import { styled } from '@mui/system'
import OutlinedInput from '@mui/material/OutlinedInput'

export const StyledOutlinedInput = styled(OutlinedInput)(()=>({
    background:'white',
    svg:{
        color:'#6f757b',
        fontSize:'18px'
    },
    input:{
        paddingLeft:'5px',
        height: '5px',
        fontSize:'14px',
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#6f757b'
        }
    },
    
}))
