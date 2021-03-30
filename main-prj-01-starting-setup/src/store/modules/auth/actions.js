import '../../../firebaseApp'
import firebase from "firebase/app"
import 'firebase/auth'


let timer;

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
                    userId: null
                })
            })
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('tokenExpiration')
        clearTimeout(timer)
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
                            localStorage.setItem('token', tokenResult.token)
                            localStorage.setItem('userId', user.uid)
                            const expirationTime = Date.parse(tokenResult.expirationTime)
                            const expiresIn = expirationTime * 1000
                            const expirationDate = new Date().getTime() + expiresIn
                            localStorage.setItem('tokenExpiration', expirationDate)

                            timer = setTimeout(() => {
                                context.dispatch('autoLogout')
                            }, expiresIn)

                            context.commit('setUser', {
                                token: tokenResult.token,
                                userId: user.uid
                            })
                            resolve()
                        })
                }).catch(err => {
                    console.error(err)
                    reject(new Error(err.message) || `${payload.mode} failed`)
                })
        })

    },
    autoLogin(context) {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const tokenExpiration = localStorage.getItem("tokenExpiration")
        const expiresIn = tokenExpiration - new Date().getTime()

        if (expiresIn < 0) {
            return;
        }

        timer = setTimeout(() => {
            context.dispatch('autoLogout')
        }, expiresIn)

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId
            })
        }
    },
    autoLogout(context) {
        context.dispatch('logout')
        context.commit('setAutoLogout')
    }
}