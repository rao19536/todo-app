import React from 'react'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'
import * as Style from './style'
const SearchComponent = () => {
  return (
    <FormControl fullWidth>
        <Style.StyledOutlinedInput
            placeholder="Search By Name"
            startAdornment={<SearchIcon position="start">$</SearchIcon>}
        />
    </FormControl>
  )
}
export default SearchComponent
