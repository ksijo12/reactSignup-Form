import React, {useState ,useEffect} from 'react'
import Validation from "./Validation"

const SignupForm = ({submitForm}) => {

    const [values,setvalues]=useState({
        userName:" ",
        email:" ",
        password:" "
    })
    const [errors,setErrors]=useState({});
    const [dataCorrect,setDataCorrect]=useState(false);

    const onChangeHandler =(event) =>{
        setvalues({
            ...values,
            [event.target.name]:event.target.value,
        });
    };
    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        setDataCorrect(true)
    };

    useEffect(() =>{
        return() =>{
            if(Object.keys(errors).length == 0 && dataCorrect){
                submitForm(true);
            }
        }
    },[errors])
    return (
        <div className = "container">
          <div className = "container-app">
                  <div>
                      <h1 className= "tittle">Create your Account Here....</h1>
                  </div>
                <form>
                    <div className ="name">
                        <label className="label">UserName</label>
                        <input 
                        className="input" 
                        type ="text"
                        name="userName"
                        value= {values.userName}
                        onChange ={onChangeHandler}
                        ></input>
                    </div>
                    {errors.userName && <p className="error">{errors.userName}</p>}
                    <div className="email-div">
                        <label className="label">Email Id</label>
                        <input 
                        className="input2" 
                        type ="email"
                        name="email"
                        value={values.email}
                        onChange ={onChangeHandler}
                        ></input>
                    </div>
                    {errors.email && <p className="error">{errors.email}</p>}
                    <div className="password-div">
                        <label className="label">Password</label>
                        <input 
                        className="input" 
                        type ="password"
                        name="password"
                        value= {values.password}
                        onChange ={onChangeHandler}
                        ></input>
                    </div>
                    {errors.password && <p className="error">{errors.password}</p>}
                    <div className="button-div">
                        <button className ="submit" onClick={handleSubmit}>SigUp</button>
                    </div>
                </form>
          </div>
        </div>
    )
}

export default SignupForm
