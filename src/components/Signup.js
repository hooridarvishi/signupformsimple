import React,{useState} from 'react';


const Signup=()=>{
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confiirmpassword:"",
        isAccepted:false
    })
    const changehandler=(event)=>{
        console.log(event.target)
         console.log(event.target.value)
         console.log(event.target.checked)
        if(event.target.name==="isaacepted")
        {
            setData({...data,[event.target.name]:event.target.checked})
        }
        else{
            setData({...data,[event.target.name]:event.target.value})
        }
        console.log(data)
      }
   
    
  return (
    <div>
      <form>
        <h2>
            Signup
        </h2>
        <div>
            <label>
                name
            </label>
            <input type="text" name='name' value={data.name}  onChange={changehandler}/>
        </div>
        <div>
            <label>
                email
            </label>
            <input type="text" name='email' value={data.email} onChange={changehandler}/>
        </div>
        <div>
            <label>
                password
            </label>
            <input type="password" name='password' value={data.password} onChange={changehandler}/>
        </div>
        <div>
            <label>
                confiirmpassword
            </label>
            <input type="password" name='confiirmpassword' value={data.confiirmpassword} onChange={changehandler}/>
        </div>
        <div>
            <label>
                I accept terms of privacy polatics.
            </label>
            <input type="checkbox" name='isaacepted' value={data.isAccepted} onChange={changehandler}/>
        </div>
        <div>
            <a href='#'> login</a>
            <button type='submit'>
                Signup
            </button>
        </div>
        </form> 
    </div>
  );
}

export default Signup;
