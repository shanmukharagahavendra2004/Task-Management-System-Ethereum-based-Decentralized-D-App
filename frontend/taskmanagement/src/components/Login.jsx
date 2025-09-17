import React,{useState} from 'react';
import axios from 'axios';

const ManagerLogin = () => {

  const [userName,setUserName]=useState("");
  const [password,SetPassword]=useState("");

  const handleSubmit=(e)=>{
     e.preventDefault();
    const info = {
      name: userName,
      password: password,

    };

    axios
      .post("http://localhost:9090/register", info)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  


  return (
    <div className="">

       
        
        
        <div className="flex justify-center mt-40">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input className="outline-none border-2 border-black w-72 h-10 hover:border-blue-400" type="text" placeholder=" Enter your Username or Email " value={userName} onChange={(e)=>{
              setUserName(e.target.value);
            }}/>
            
            
            <input className="outline-none border-2 border-black w-72 h-10 hover:border-blue-400"  type="password" placeholder="Enter the Password" value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            <button type="submit" className="outline-none border-2 border-black w-72 h-10 bg-blue-400 text-white hover:border-blue-400" >Login</button>
          </form>
        </div>
        
    </div>
  )
}

export default ManagerLogin