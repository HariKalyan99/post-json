import { useState } from "react"
import CreatePosts from "./components/CreatePosts"
import Dashboard from "./components/Dashboard"

function App() {

  const [showPage, setShowPage] = useState("home"); 
  const [postList, setPostList] = useState([]);

  const pageSwitch = (pg) => {
    setShowPage(pg)
  }

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
      {showPage === "dash" ? <Dashboard pageSwitch={pageSwitch} showPage={showPage}/> :
      <CreatePosts pageSwitch={pageSwitch} showPage={showPage}/>}
    </div>
  )
}

export default App
