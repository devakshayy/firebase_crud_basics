import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center  p-20'>
       <h1 className='text-3xl font-semibold'>This is Home Page</h1>
       <br />
       <button 
          onClick={() => navigate("/read")}
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
        <br />
        <button  
          onClick={() => navigate("/updatewrite")}
          className="p-1 px-3 bg-green-300 rounded-xl ring-4"
          >UPDATE WRITE
        </button>
    </div>
  )
}

export default Home
