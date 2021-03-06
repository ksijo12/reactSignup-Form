const Validation = (values) => {
      let errors ={};

    if(!values.userName){
        errors.userName ="Name is required"
    }
    if(!values.email){
        errors.email ="email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email ="email is invalid*"
    }
    if(!values.password){
        errors.password ="password is required"
    }else if(values.password.length < 5){
        errors.password ="password must contain more than 5 character"
    }
    return errors;
}

export default Validation
