import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

//ACTION DEFINITIONS
const GET_RANDOM = "invite/GET_RANDOM"
const SET_GOING = "invite/SET_GOING"
const SET_NOTGOING = "invite/SET_NOTGOING"
const LOADING = "invite/LOADING"
const FINISHED = "users/FINISHED"

//INITIAL STATE
const initialState = {
  random: {},
  going: [],
  notgoing: [],
  loading: false
}

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM:
      return { ...state, random: action.payload }
    case SET_GOING:
      return { ...state, going: [...state.going, action.payload] }
    case SET_NOTGOING:
      return { ...state, notgoing: [...state.notgoing, action.payload] }
    case LOADING:
      return { ...state, loading: true }
    case FINISHED:
      return { ...state, loading: false }
    default:
      return state
  }
}

//ACTION CREATORS
function getRandom() {
  return (dispatch) => {
    dispatch({
      type: LOADING
    })
    axios.get("/invite/random").then((resp) => {
      dispatch({
        type: GET_RANDOM,
        payload: resp.data
      })
      dispatch({
        type: FINISHED
      })
    })
  }
}

function setGoing(user) {
  return (dispatch) => {
    axios.post("/invite/going", { user }).then((resp) => {
      dispatch({
        type: SET_GOING,
        payload: resp.data
      })
      dispatch(getRandom())
    })
  }
}

function setNotGoing(user) {
  return (dispatch) => {
    axios.post("/invite/notgoing", { user }).then((resp) => {
      dispatch({
        type: SET_NOTGOING,
        payload: resp.data
      })
      dispatch(getRandom())
    })
  }
}

//CUSTOM HOOKS
export const useInvite = function() {
  const going = useSelector((appState) => appState.inviteState.going)
  const notgoing = useSelector((appState) => appState.inviteState.notgoing)
  const random = useSelector((appState) => appState.inviteState.random)
  const dispatch = useDispatch()
  const go = (user) => dispatch(setGoing(user))
  const nogo = (user) => dispatch(setNotGoing(user))
  const get = () => dispatch(getRandom())
  const loading = useSelector((appState) => appState.inviteState.loading)

  useEffect(() => {
    get()
  }, [])

  return { going, notgoing, random, go, nogo, get, loading }
}
