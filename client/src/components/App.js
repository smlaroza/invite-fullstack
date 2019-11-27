import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Going from "./Going"
import notGoing from "./notGoing"
import "../styles/styles.css"

import Invite from "./Invite"

function App() {
  return (
    <Router>
      <div>
        <ul className="nav">
          <li>
            <Link to="">Invite</Link>
          </li>
          <li>
            <Link to="/Going">Going</Link>
          </li>
          <li>
            <Link to="/notGoing">Not Going</Link>
          </li>
        </ul>
        <Route path="/" exact component={Invite} />
        <Route path="/Going" component={Going} />
        <Route path="/notGoing" component={notGoing} />
      </div>
    </Router>
  )
}

export default App
