import React from "react"
import { useInvite } from "../hooks"

export default (props) => {
  const { notgoing } = useInvite()
  return (
    <div className="notGoingContainer">
      <div className="notGoingTitle">
        <h2>Not Going</h2>
      </div>
      {notgoing.map((person) => (
        <div key={"notgoing" + person.id} className="person">
          <div className="personNotGoingPic">
            <p>
              <img src={person.picture} />
            </p>
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
