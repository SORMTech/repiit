import React, { createContext, useContext, useEffect, useState } from 'react'
// import {
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from 'firebase/auth'
// import { getAuth } from "firebase/auth";

// const auth = getAuth();

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  //////// listen for Firebase state change
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     // console.log(user)
  //     if (user) {
  //       setUser(user);
  //       // setUser({
  //       //   uid: user.uid,
  //       //   email: user.email,
  //       //   displayName: user.displayName,
  //       // })
  //     } else {
  //       setUser(null)
  //     }
  //     setLoading(false)
  //   })

  //   unsubscribe()
  // }, [])

  const signup = async ({ email, password, fullName }) => {
    // try {
    //   let authUser = await createUserWithEmailAndPassword(auth, email, password)
    //   // .then(async (authUser) => {
    //   if (authUser?.user) {
    //     setUser(authUser.user)
    //     console.log(authUser);
    //     const displayName = fullName.split(' ')[0] // first word from full name
    //     authUser?.user && updateProfile(authUser?.user, { displayName });

    //     let res = await fetch('api/users', {
    //       method: 'POST',
    //       body: JSON.stringify({ uid: authUser?.user.uid, fullName, email, password }),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //     // console.log(res);
    //     result = await res.json()
    //     if (result) {
    //       let response = { sucess: true, message: 'sucess' }
    //       return response
    //     }
    //   } else {
    //     let response = { sucess: false, message: 'An error occured!' }
    //     return response
    //   }

    //   // })
    // } catch (e) {
    //   let response = { sucess: false, message: e.message }
    //   return response
    // }
    
    let response = { sucess: false, message: "e.message" }
    return response
  }

  const login = async (email, password) => {
    var response = { sucess: false, message: 'An error occured!' }
    // let r = null
    // try {
    //   r = await signInWithEmailAndPassword(auth, email, password)
    //   response = { sucess: true, message: 'sucess' }
    // } catch (e) {
    //   console.log(e)
    //   response = { sucess: false, message: 'An error occured!' }
    // };
    // if (r && process.env.NODE_ENV === 'production') {
    //   try {
    //     const loginType = r?.user.providerData[0].providerId
    //     const emailVerified = r?.user.emailVerified
    //     const body = JSON.stringify({ "uid": r?.user.uid, "action": r?.operationType, "details": `new login, login type: ${loginType}, emailVerified: ${emailVerified}` })
    //     // console.log(body)
    //     await fetch('api/history', {
    //       method: 'POST',
    //       json: body,
    //       body,
    //       headers: {
    //         "content-type": "application/json",
    //       }
    //     })
    //   } catch (e) { 
    //     // console.log(e) 
    //   }
    // }

    // r && setUser(r.user)
    return response
  }

  const logout = async () => {
    setUser(null)
    let msg = 'success';
    // await signOut(auth).catch(e => {
    //   msg = e.message
    // });
    return msg
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
