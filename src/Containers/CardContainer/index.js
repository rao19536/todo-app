import React, { useState } from 'react'
import ParentComponent from '../../Components/ParentComponent'
import ListingComponent from '../../Components/ListingComponent'
import SearchComponent from '../../Components/searchComponent'
import UserFormComponent from '../../Components/UserFormComponent'
import CustomizedSnackbars from '../../Components/SnackBarComponent'
import * as Style from './style'

const ListingContainer = () => {
  const [userInfo, setUserInfo] = useState([])
  const [successMessage, setSuccessMessage] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [userID, setUserID] = useState(1)

  const userIDFunc = () => {
    setUserID(userID + 1)
  }
  const handleSubmit = (data) =>{
    userIDFunc()
    setUserInfo([...userInfo, {id:userID, ...data}])
    setSuccessMessage('Contact Added Successfully')
    setIsOpen(true)
  }
  const handleUpdateData = (data, uID) => {
    const findIndex = userInfo.findIndex(val=>uID===val.id)
    setUserInfo([...userInfo.slice(0, findIndex), {id: uID, ...data}, ...userInfo.slice(findIndex+1)])
    setSuccessMessage('Contact Updated Successfully')
    setIsOpen(true)
  } 
  const deleteUserFunc = (uID) => {
    setUserInfo(userInfo.filter(val=> val.id !== uID))
    setSuccessMessage('Contact Deleted Successfully')
    setIsOpen(true)
  }
  const handleCallbackFunc = (status) =>{
    setIsOpen(status)
  }
  
console.log('userInfo=>', userInfo)
  return (
    <>
      <Style.StyledContainer>
        <ParentComponent>
          <Style.StyledTitleParent>
            <Style.StyledTitle>
              Todo App
            </Style.StyledTitle>
          </Style.StyledTitleParent>
          <Style.StyledContactsParent>
            <Style.StyledContactTitle>
              Users
            </Style.StyledContactTitle>
            <UserFormComponent 
              handleSubmitData={handleSubmit}
              isEdit={false} 
            />
          </Style.StyledContactsParent>
          <Style.StyledSearchComponentParent>
            <SearchComponent />
          </Style.StyledSearchComponentParent>
          <Style.StyledListingContainerParent dataLength={userInfo?.length ?? 0}>
            {userInfo?.length>0 ? userInfo.map(val=>(
              <ListingComponent
                userObj={val}
                deleteUserFunc={deleteUserFunc}
                handleUpdateData={handleUpdateData}
              />
            )) : (
              <Style.StyledDataNotFound>
                No Data Found
              </Style.StyledDataNotFound>
              
            )}
          </Style.StyledListingContainerParent>
        </ParentComponent>
      </Style.StyledContainer>
      <CustomizedSnackbars 
        message={successMessage}
        isOpen={isOpen}
        callbackFunc={handleCallbackFunc}
      />
    </>
  )
}
export default ListingContainer
