import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Axios from "axios"

// action definitions
const GET_USER = "users/GET_USERS"
const SHOW_GOING = "users/SHOW_GOING"
const SHOW_NOTGOING = "users/SHOW_NOTGOING"

// initial state
const initialState = {
  users: {},
  going: [],
  notGoing: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, users: action.payload }
    case SHOW_GOING:
      return { ...state, users: action.payload }
    case SHOW_NOTGOING:
      return { ...state, users: action.payload }
    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return (dispatch) => {
    Axios.get("https://randomuser.me/api").then((resp) => {
      const person = {
        picture: resp.data.results[0].picture.large,
        fname: resp.data.results[0].name.last,
        lname: resp.data.results[0].name.first,
        phone: resp.data.results[0].phone,
        email: resp.data.results[0].email
      }

      dispatch({
        type: GET_USER,
        payload: person
      })
    })
  }
}

//post calls
function going(user) {
  return (dispatch) => {
    Axios.post("/users/going", { user }).then((resp) => {
      dispatch(showGoingUser())
      dispatch(getUsers())
    })
  }
}
function notGoing(user) {
  return (dispatch) => {
    Axios.post("/users/notgoing", { user }).then((resp) => {
      dispatch(showNotGoingUser())
      dispatch(getUsers())
    })
  }
}

//get calls
function showGoingUser() {
  return (dispatch) => {
    Axios.get("/users/going").then((resp) => {
      dispatch({
        type: SHOW_GOING,
        payload: resp.data
      })
    })
  }
}
function showNotGoingUser() {
  return (dispatch) => {
    Axios.get("/users/notgoing").then((resp) => {
      dispatch({
        type: SHOW_NOTGOING,
        payload: resp.data
      })
    })
  }
}

// custom hooks
export function useUsers() {
  const user = useSelector((appState) => appState.userState.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return { user }
}
