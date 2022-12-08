import React from 'react'
import CallIcon from '@mui/icons-material/Call'
import DeleteUserComponent from '../DeleteUserComponent'
import UserFormComponent from '../UserFormComponent'
import * as Style from './style'

const ListingComponent = ({userObj, handleUpdateData, deleteUserFunc}) => {
    const deleteUser = (userID) => {
        deleteUserFunc(userID)
    }
    const handleSubmitData = (data, userID) =>{
        handleUpdateData(data, userID)
    }
    
  return (
    <Style.StyledListingCardParent>
        <Style.StyledNameContactParent>
            <Style.StyledfullName>
                {userObj?.firstName ?? ''} {userObj?.lastName ?? ''}
            </Style.StyledfullName>
            <Style.StyledPhone>
                <CallIcon />
                {userObj?.phoneNumber ?? ''}
            </Style.StyledPhone>
        </Style.StyledNameContactParent>
        <Style.StyledEditDeleteParent>
            <UserFormComponent 
                userObj={userObj}
                isEdit={true}
                handleSubmitData={handleSubmitData}
            />
            <DeleteUserComponent 
                userId={userObj?.id}
                deleteUser={deleteUser}
                message='Do you really want to delete it?'
            />
        </Style.StyledEditDeleteParent>
    </Style.StyledListingCardParent>    
  )
}
export default ListingComponent
