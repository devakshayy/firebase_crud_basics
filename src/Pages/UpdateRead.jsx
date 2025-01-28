import { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase,ref,get } from "firebase/database";
import { useNavigate } from "react-router-dom";


const UpdateRead = () => {

  const navigate = useNavigate();
  let [initialData, setInitialData] = useState([]);
   
  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db,"nature/fruits");
    const snapShot = await get(dbRef);

    if(snapShot.exists()){
      const myData = snapShot.val();
      const tempArray = Object.keys(myData).map(myFireId => {
          return {
             ...myData[myFireId],
             fruitId: myFireId
          }
      })
      setInitialData(tempArray)
    }else{
      alert("An error occured")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-5 ">
        <h1 className="text-2xl font-semibold uppercase ">This is UpdateRead page</h1>
        
        <button 
          onClick={fetchData}
          className='my-5 border border-gray-900 p-2 rounded-lg bg-violet-300 font-medium'
          >Read Data
       </button>
       <ul>
          {initialData.map((item,idx) => (
            <li key={idx}>{item.fruitName} : {item.fruitDefinition} {item.fruitId}</li>
          )) }
       </ul>
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
          onClick={() => navigate("/updatewrite")}
          className="p-1 px-3 bg-green-300 rounded-xl ring-4"
          >UPDATE WRITE
        </button>
    </div>
  )
}

export default UpdateRead
