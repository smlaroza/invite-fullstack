import React from "react"
import { Invite } from "./Invite"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Invite} />
    </Router>
  )
}

export default App
