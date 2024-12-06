import React from 'react'
import Sidebar from './Sidebar'
import NavigationBar from './NavigationBar'

const CreatePosts = ({pageSwitch, showPage}) => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column"}}>
    <NavigationBar pageSwitch={pageSwitch}
showPage={showPage}/>

    <div className="d-flex w-100">
    <Sidebar pageSwitch={pageSwitch}
showPage={showPage}/>
     

    <form className="h-100 w-100 d-flex flex-column justify-content-center align-items-center mt-5">
       <label id="username">Username</label>
       <input id="username" type="text" placeholder="enter username" className="w-50 p-3 m-2 border-0 shadow rounded bg-dark text-light"/>

       <label id="title">Title</label>
       <input type="text" id="title" placeholder="enter title" className="w-50 p-3 m-2 border-0 shadow rounded bg-dark text-light"/>

       <label id="body">Body</label>
       <textarea id="body" rows={5} type="text" placeholder="enter body" className="w-50 p-3 m-2 border-0 shadow rounded bg-dark text-light"/>

       <label id="tags">Tags</label>
       <input type="text" id="tags" placeholder="enter # before every tag" className="w-50 p-3 m-2 border-0 shadow rounded bg-dark text-light"/>

       <label id="reactions">Reactions</label>
       <input type="number" id="reactions" placeholder="your reaction to this post" className="w-50 p-3 m-2 border-0 shadow rounded bg-dark text-light"/>

       <label id="views">Views</label>
       <input type="number" id="views" placeholder="how many people will watch this post" className="w-50 p-3 m-2 border-0 shadow rounded bg-dark text-light"/>

       <label id="userId">userId</label>
       <input type="number" id="userId" placeholder="userId should be a number" className="w-50 p-3 m-2 border-0 shadow rounded bg-dark text-light"/>
    </form>
    </div>
  </div>
  )
}

export default CreatePosts
