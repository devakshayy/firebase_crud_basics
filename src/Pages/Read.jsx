import { useEffect, useState } from "react"
import app from "../firebaseConfig"
import { getDatabase,ref,get } from "firebase/database"

const Read = () => {

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
    </div>
  )
}

export default Read
