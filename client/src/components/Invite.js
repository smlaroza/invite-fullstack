import React from "react"
import { useInvite } from "../hooks"
import Going from "./Going"
import notGoing from "./notGoing"
import Icon from "../lib/Icon"

export default (props) => {
  const { random, go, nogo, loading, going, notgoing } = useInvite()

  return (
    <div>
      <p>
        Going: {going.length} Not Going: {notgoing.length}
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bgContainer">
          <div className="person">
            <p>
              <img src={random.picture} />
            </p>
            <div className="infoContainer">
              <div className="actualInfo">
                <p>
                  Name: {random.fname} {random.lname}
                </p>
                <p>Phone: {random.phone}</p>
                <p>Email: {random.email}</p>
                <div className="buttonAnswer">
                  <button className="no" onClick={(e) => nogo(random)}>
                    <Icon icon="times"></Icon>
                  </button>
                  <button className="yes" onClick={(e) => go(random)}>
                    <Icon icon="check"></Icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
