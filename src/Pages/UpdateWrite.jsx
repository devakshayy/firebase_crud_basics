import { useState } from "react"
import app from "../firebaseConfig"
import { getDatabase,ref,set,push } from "firebase/database"
import { useNavigate } from 'react-router-dom'

const UpdateWrite = () => {

  const navigate = useNavigate() 
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
   
  const saveData = async () => {
     const db = getDatabase(app);
     const newDocRef = push(ref(db, "nature/fruits"));
     set(newDocRef, {
       fruitName: inputValue1,
       fruitDefinition: inputValue2
     }).then( () => {
       alert("Data saved successfully")
     })
     .catch((error) => {
       alert("error:",error.message);
     })
  }
  return (
    <div className="flex flex-col items-center justify-center py-5 ">
        <h1 className="text-2xl font-semibold uppercase ">This is Update write page</h1>
        <input className="border border-gray-800 text-black placeholder:text-black placeholder:text-sm rounded-lg my-4 p-1" placeholder="Type...." type="text" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
        <input className="border  border-gray-800 text-black placeholder:text-black placeholder:text-sm rounded-lg mb-4 p-1" placeholder="Type...." type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
        <button 
            className="border p-1 border-gray-800 bg-orange-500 text-white font-medium rounded-lg"
            onClick={saveData}
            >Update
        </button>
       <button  
          onClick={() => navigate("/read")}
          className="p-1 px-3 mt-5 bg-green-300 rounded-xl ring-4"
          >READ
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
