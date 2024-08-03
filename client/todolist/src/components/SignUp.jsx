import React, {useState} from "react"
import {Link} from 'react-router-dom'

import { supabase } from '../client'

import '../App.css'  

const signUp = () =>{

  const [formData, setFormData] = useState({
    fullName:'', email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
      alert('Check your email for the verification link')

    } catch (error){
      alert(error)
    }
  }

  return (
    <div>
    <form onSubmit = {handleSubmit}>
      <input placeholder="Fullname" name="fullName" onChange={handleChange} /> <br/>

      <input placeholder="Email" name="email" onChange={handleChange} /><br/>

      <input placeholder="Password" name="password" type="password" onChange={handleChange} /> <br/>

      <button type="submit">
        Submit
      </button>

    </form>
     <p>Already Have account? <Link to='/'>Login</Link>  </p>
    </div>
  )
}

export default signUp