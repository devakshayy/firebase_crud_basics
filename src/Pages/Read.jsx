import { useEffect, useState } from "react"
import app from "../firebaseConfig"
import { getDatabase,ref,get } from "firebase/database"
import { useNavigate } from "react-router-dom"

const Read = () => {
 const navigate = useNavigate();
 let [initialData, setInitialData] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db,"nature/fruits");
    const snapShot = await get(dbRef);
    if(snapShot.exists()){
      setInitialData(Object.values(snapShot.val()));
    }else{
      alert("an error Occured!!!")
    }
  }


  // useEffect(()=> {
  //   fetchData(),[]
  // })


  return (
    <div  className="flex flex-col items-center justify-center py-5 ">
       <h1 className="text-2xl font-semibold uppercase ">This is Read Page</h1>
       <button 
          onClick={fetchData}
          className='my-5 border border-gray-900 p-2 rounded-lg bg-violet-300 font-medium'
          >Read Data
       </button>
       <ul>
          {initialData.map((item,idx) => (
            <li key={idx}>{item.fruitName} : {item.fruitDefinition}</li>
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

export default Read
