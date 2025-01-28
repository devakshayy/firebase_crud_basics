import React from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateWrite = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-5 ">
        <h1 className="text-2xl font-semibold uppercase ">This is Update write page</h1>

        <button 
          onClick={() => navigate("/")}
          className="p-1 px-3 mt-4 bg-green-300 rounded-xl ring-4"
          >HOME
       </button>
       <br />
       <button  
          onClick={() => navigate("/write")}
          className="p-1 px-3 bg-green-300 rounded-xl ring-4"
          >READ
        </button>
        <br />
       <button  
          onClick={() => navigate("/write")}
          className="p-1 px-3 bg-green-300 rounded-xl ring-4"
          >WRITE
        </button>
        <br />
        <button  
          onClick={() => navigate("/updateread")}
          className="p-1 px-3 bg-green-300 rounded-xl ring-4"
          >UPDATE READ
        </button>
    </div>
  )
}

export default UpdateWrite
