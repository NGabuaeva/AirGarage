import React from 'react';
import { useForm } from "react-hook-form"

export default function Form(props) {
  const { handleSubmit, register } = useForm()
  const getParkingLots = props.getParkingLots
  const onSubmit = values => {
    getParkingLots(values)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input name='location' ref={register} />
      <button type='submit'>Submit</button>
    </form>
  )
}
