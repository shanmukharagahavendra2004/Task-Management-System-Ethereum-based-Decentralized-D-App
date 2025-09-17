import React from 'react';
import {Link} from 'react-router-dom';
import Signin from './Signin';
import Login from './Login';

const Home = () => {
  return (
    <div className="bg-slate-200 flex justify-between items-center">
        <h1 className="  text-center p-2 text-5xl">Task Management</h1>
        <div className="text-2xl flex gap-4 ml-auto mr-5">
          <Link className="border-2 border-white p-2 w-full text-center m-auto" to="/signin ">Signin</Link>
          <Link className="border-2 border-white p-2 " to="/login">Login</Link>
        </div>
        <div>
        
        </div>
        
    </div>
  )
}

export default Home