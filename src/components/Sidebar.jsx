import React from 'react'

const Sidebar = ({pageSwitch
    ,showPage}) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px", minHeight: "100vh"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={() => pageSwitch("home")}>
        <a href="#" className={`nav-link ${showPage === "home" && "active"} text-white`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li onClick={() => pageSwitch("dash")}>
        <a href="#" className={`nav-link ${showPage === "dash" && "active"} text-white`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Dashboard
        </a>
      </li>
    </ul>
    <hr />
  </div>
  )
}

export default Sidebar
