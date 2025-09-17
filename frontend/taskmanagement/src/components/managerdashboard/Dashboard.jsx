import React from 'react'


const ManagerDashboard = () => {
  return (
    <div className="bg-black font-semibold border-1 min-h-screen">
    <div className="text-5xl text-white p-5">
     <h1 >Overview</h1>
     </div>

     <div className="text-white mt-10 p-5 flex flex-col gap-3">
     <div className="rounded-lg bg-slate-900 border-1 border-gray-500 p-3">
      <h5 className="text-gray-500">Total projects</h5>
      <h1 className="text-5xl font-bold">Projects</h1>
     </div>

     <div className="rounded-lg bg-slate-900 border-2 border-thin border-gray-500 p-3">
      <h5 className="text-gray-500">Tasks In Progress</h5>
      <h1 className="text-4xl font-bold">Numbers</h1>
     </div>

     <div className="rounded-lg bg-slate-900 border-2 border-gray-500 p-3">
      <h5 className="text-gray-500" >Overdue Tasks</h5>
      <h1 className="text-4xl font-bold">Number</h1>
     </div>

     <div className="rounded-lg bg-slate-900 border-2 border-gray-500 p-3">
      <h5 className="text-gray-500">On-chain Records</h5>
      <h1 className="text-4xl font-bold">Numbers</h1>
      </div>

     </div>
     <div className="rounded-lg text-white border-2 border-gray-800 w-96 p-2">
      <h1 className="p-2 font-bold text-xl">Upcoming Deadlines</h1>
      <div className="flex gap-x-3 p-2 ">
        <h1>TASK</h1>
        <h1>ASSIGNEE</h1>
        <h1>DUE</h1>
        <h1>STATUS</h1>  
      </div>

     
     </div>

      <div className="text-white bg-black flex flex-col gap-3 p-5 border-2 border-gray-800 m-10">
        <h1 className="text-2xl">Assign New Task</h1>
        <div>
          <h1>Project</h1>
          <input className="bg-black border-2 border-gray-800" type="text"/>
        </div>
        <div>
        <h1>Assignee</h1>
        </div>
        <div>
          <h1>Priority</h1>
          <select className="bg-black border-2 border-gray-800">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div >
          <h1>Start Date</h1>
          <input className="bg-black border-2 border-gray-800" type="date"/>
        </div>
        <div>
          <h1>Due Date</h1>
          <input className="bg-black border-2 border-gray-800" type="date"/>
        </div>
   
      </div>


    </div>
  )
}

export default ManagerDashboard
