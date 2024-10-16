import React, { ReactElement, createContext, useCallback, useReducer } from "react";

type User = {
  userName: string | null,
  email: string | null
}

const initUserState = {
  userName: null,
  email: null,
}

const reducerActions = {
  SET: "setUser",
  REMOVE: "removeUser",
} as const

type ReducerAction = {
  type: (typeof reducerActions)[keyof typeof reducerActions]
  payload?: User
}

const reducer = (state: User, action: ReducerAction) => {
  switch (action.type) {
    case reducerActions.SET :
      return action.payload ? {
        userName: action.payload.userName,
        email: action.payload.email
      } : state
    case reducerActions.REMOVE :
      return initUserState
    default:
      return state
  }
}
 
const useUserContext = (initUserState: User, fetchedUserData:User) => {
  const [state, dispatch] = useReducer(reducer, initUserState)

  const setUser = useCallback(()=> {
  dispatch({type: reducerActions.SET, payload: fetchedUserData})
},[])

  const removeUser = useCallback(()=> {
    dispatch({type: reducerActions.REMOVE})
  },[])

  return {state, setUser, removeUser}
}

type UseUserContextType = ReturnType<typeof useUserContext>

const initContextState: UseUserContextType = {
  state: initUserState,
  setUser: () => {},
  removeUser: () => {},
}

export const UserContext = createContext<UseUserContextType>(initContextState)

type UserContextProviderProps = {
  children? : ReactElement | ReactElement[] | undefined
  fetchedUserData: User
}


export const UserContextProvider = ({
  children,
  fetchedUserData,
}: UserContextProviderProps):ReactElement => {
  return <UserContext.Provider value = {useUserContext(initUserState, fetchedUserData)}>
    {children}
  </UserContext.Provider>
}
