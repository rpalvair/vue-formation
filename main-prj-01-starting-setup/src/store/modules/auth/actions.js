import '../../../firebaseApp'
import firebase from "firebase/app"
import 'firebase/auth'


export default {
    setId(context, payload) {
        console.log("setId", payload)
        context.commit('setId', payload)
    },
    async login(context, payload) {
        console.log("login", context, payload)
        return context.dispatch("auth", { ...payload, mode: "login" })
    },
    async signup(context, payload) {
        console.log("signup", context, payload)
        return context.dispatch("auth", { ...payload, mode: "signup" })
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
    },
    auth(context, payload) {
        console.log("context", context)
        console.log("payload", payload)
        let functionToCall = null
        if (payload.mode === "login") {
            functionToCall = "signInWithEmailAndPassword"
        } else {
            functionToCall = "createUserWithEmailAndPassword"
        }
        return new Promise((resolve, reject) => {
            firebase.auth()[functionToCall](payload.email, payload.password)
                .then(credentials => {
                    const user = credentials.user
                    console.log("user from firebase", user)
                    credentials.user.getIdTokenResult()
                        .then(tokenResult => {
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
                    reject(new Error(err.message) || `${payload.mode} failed`)
                })
        })

    }
}