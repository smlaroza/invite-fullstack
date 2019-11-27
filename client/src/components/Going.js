import React from "react"
import { useInvite } from "../hooks"

export default (props) => {
  const { going } = useInvite()
  return (
    <div className="goingContainer">
      <div className="goingTitle">
        <h2>Going</h2>
      </div>
      {going.map((person) => (
        <div key={"going" + person.id} className="person">
          <div className="personGoingPic">
            <img src={person.picture} />
          </div>
          <div className="goingInfo">
            <p>
              Name: {person.fname} {person.lname}
            </p>
            <p>Phone: {person.phone}</p>
            <p>Email: {person.email}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
