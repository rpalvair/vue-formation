import '../../../firebaseApp'
import firebase from "firebase/app"
import 'firebase/auth'

export default {
    setId(context, payload) {
        console.log("setId", payload)
        context.commit('setId', payload)
    },
    login(context, payload) {
        console.log("login", context, payload)
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(credentials => {
                    const user = credentials.user
                    console.log("user from firebase", user)
                    credentials.user.getIdTokenResult()
                        .then(tokenResult => {
                            console.log(`user with email ${user.email} is logged in`)
                            console.log("uid", user.uid);
                            context.commit('setUser', {
                                token: tokenResult.token,
                                userId: user.uid,
                                tokenExpiration: tokenResult.expirationTime
                            })
                            resolve()
                        })
                }).catch(err => {
                    console.error(err)
                    reject(new Error(err.message) || 'Signup failed')
                })
        })
    },
    signup(context, payload) {
        console.log("signup", context, payload)
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(credentials => {
                    const user = credentials.user
                    console.log("user from firebase", user)
                    credentials.user.getIdTokenResult()
                        .then(tokenResult => {
                            console.log(`user with email ${user.email} is registered`)
                            console.log("uid", user.uid);
                            context.commit('setUser', {
                                token: tokenResult.token,
                                userId: user.uid,
                                tokenExpiration: tokenResult.expirationTime
                            })
                            resolve()
                        })
                }).catch(err => {
                    console.error(err)
                    reject(new Error(err.message) || 'Signup failed')
                })
        })
    }, logout(context) {
        firebase.auth().signOut()
            .then(() => {
                console.log("User is logged out")
                context.commit('setUser', {
                    token: null,
                    userId: null,
                    tokenExpiration: null
                })
            })
    }
}