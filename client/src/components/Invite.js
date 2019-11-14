import React from "react"
import { useUsers } from "../hooks"
import Icon from "../lib/Icon"

export function Invite() {
  const { user } = useUsers()

  return (
    <div className="bgContainer">
      <div className="invContainer">
        <div className="userPhoto">
          <img src={user.picture} />
        </div>
        <div className="infoContainer">
          <div className="actualInfo">
            <p>
              <b>Name:</b> {user.fname} {user.lname}
            </p>
            <p>
              <b>Phone:</b> {user.phone}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <div className="buttonAnswer">
              <button className="no">
                <Icon icon="times" />
              </button>
              <button className="yes">
                <Icon icon="check" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
