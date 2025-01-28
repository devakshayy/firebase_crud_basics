import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Read from "./Pages/Read"
import Write from "./Pages/Write"
import UpdateRead from "./Pages/UpdateRead"
import UpdateWrite from "./Pages/UpdateWrite"

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/read" element={<Read/>} />
          <Route path="/write" element={<Write/> } />
          <Route path="/updateread" element={ <UpdateRead/> } />
          <Route path="/updatewrite/:firebaseId" element={ <UpdateWrite/> } />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
