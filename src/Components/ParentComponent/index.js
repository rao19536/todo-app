import React from 'react'
import * as Style from './style'

const ParentComponent = ({children}) => {
  return (
    <Style.StyledBox>
        {children}
    </Style.StyledBox>
  )
}
export default ParentComponent
