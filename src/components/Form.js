import React, {useState} from 'react'
import SignupForm from "./SignupForm"
import Success from "./Success"
const Form = () => {
    const [formSubmited,setformSumitted]=useState(false)
    const submitForm =() =>{
        setformSumitted(true)
    }
    return (
        <div>
            {!formSubmited ? <SignupForm submitForm ={submitForm}/> : <Success />}
        </div>
    )
}

export default Form
