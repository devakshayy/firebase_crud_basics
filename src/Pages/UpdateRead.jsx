import { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase,ref,get } from "firebase/database";

const UpdateRead = () => {

  let [initialData, setInitialData] = useState([]);
   
  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db,"nature/fruits");
    const snapShot = await get(dbRef);

    if(snapShot.exists()){
      const myData = snapShot.val();
      const tempArray = Object.keys(myData).map(myFireId =>{
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

    </div>
  )
}

export default UpdateRead
