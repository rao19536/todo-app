import React, { useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import Modal from '@mui/material/Modal'
import FormControl from '@mui/material/FormControl'
import { useForm, Controller } from "react-hook-form"
import * as Style from './style'

const UserFormComponent = ({isEdit, userObj, handleSubmitData}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    if(!isEdit) reset()
  }
  const { handleSubmit, control, reset, setValue, formState: { errors } } = useForm()
  useEffect(()=>{
    if(isEdit){
      setValue("firstName", userObj?.firstName)
      setValue("lastName", userObj?.lastName)
      setValue("phoneNumber", userObj?.phoneNumber)
    }
    
  },[userObj])

  const onSubmit = data => {
    
    if(!isEdit){
      handleSubmitData(data)
    }else{
      handleSubmitData(data, userObj.id)
    }
  }
  
  return (
    <>
    {!isEdit ? (
      <Style.StyledAddContactButton 
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Register User
      </Style.StyledAddContactButton>
      ):(
        <Style.StyledEdit onClick={handleOpen}>
          <EditIcon />
        </Style.StyledEdit>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Style.StyledParentBox>
        <Style.StyledTitle>
          Register User
        </Style.StyledTitle>
        <FormControl fullWidth>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true, maxLength: 20,pattern: /^[A-Za-z]+$/i }}
            render={({ field }) => <Style.StyledTextField
              placeholder='John'
              {...field} 

            />}
          />
          {errors?.firstName?.type === "required" && <Style.StyledErrorMsg>This field is required</Style.StyledErrorMsg>}
          {errors?.firstName?.type === "maxLength" && (
            <Style.StyledErrorMsg>First name cannot exceed 20 characters</Style.StyledErrorMsg>
          )}
          {errors?.firstName?.type === "pattern" && (
            <Style.StyledErrorMsg>Alphabetical characters only</Style.StyledErrorMsg>
          )}
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true,pattern: /^[A-Za-z]+$/i }}
            render={({ field }) => <Style.StyledTextField
              placeholder='Doe'
              {...field} 

            />}
          />
          {errors?.lastName?.type === "required" && <Style.StyledErrorMsg>This field is required</Style.StyledErrorMsg>}
          {errors?.lastName?.type === "pattern" && (
            <Style.StyledErrorMsg>Alphabetical characters only</Style.StyledErrorMsg>
          )}
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true, pattern: /^0|[1-9]\d*$/ }}
            render={({ field }) => <Style.StyledTextField
              placeholder='+923071242369'
              {...field} 

            />}
          />
          {errors?.phoneNumber?.type === "required" && <Style.StyledErrorMsg>This field is required</Style.StyledErrorMsg>}
          {errors?.phoneNumber?.type === "pattern" && (
            <Style.StyledErrorMsg>Enter numbers only</Style.StyledErrorMsg>
          )}
          <Style.StyledButtonParent>
            <Style.StyledButton variant="contained" type='submit'>
              {!isEdit ? 'Submit' : 'Update'}
            </Style.StyledButton>
          </Style.StyledButtonParent>
        </form>
        </FormControl>
        </Style.StyledParentBox>
      </Modal>
    </>
  )
}
export default UserFormComponent
