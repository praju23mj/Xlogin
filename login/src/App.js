import React from "react";
import { useState } from "react";


function App() {
const[username,setUserName]=useState('');
const[password,setPassword]=useState('');
const[msg,setMsg]=useState(false);
const[isRead, setIsRead]=useState(false);

const handleSubmit=(e)=>{
  e.preventDefault();
  if (username === 'user' && password === 'password') {
    // setMsg(`Welcome, ${username}!`);
    setIsRead(true);
  } else { 
    setMsg(true);
    
  }

}


  return (
    <div>
      <h1>Login Page</h1>
       {msg ? (<p>Invalid username or password</p>) :("")}
       {isRead ? (<p>Welcome, {username}!</p>) : (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" placeholder="username" value={username} onChange={(e)=>setUserName(e.target.value)} required/>
        </div>
        <div>
          <label>Password:</label>
          <input type='password' placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <button type="Submit">Submit</button>
      </form>
       )}
      
    </div>
  );
}

export default App;
