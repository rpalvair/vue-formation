import '../../../firebaseApp'
import firebase from "firebase/app"
import 'firebase/auth'

export default {
    setId(context, payload) {
        console.log("setId", payload)
        context.commit('setId', payload)
    },
    login() {

    },
    signup(context, payload) {
        console.log("signup", context, payload)
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(credentials => {
                const user = credentials.user
                console.log("user from firebase", user)
                credentials.user.getIdTokenResult()
                    .then(tokenResult => {
                        console.log("tokenResult", tokenResult)
                        const token = tokenResult.token
                        console.log("token", token)
                        const email = user.email
                        console.log(`user with email ${email} is registered`)
                        console.log("uid", user.uid);
                        context.commit('setUser', {
                            token: token,
                            userId: user.uid,
                            tokenExpiration: tokenResult.expirationTime
                        })
                    })
            }).catch(err => {
                console.error(err)
                throw new Error(err.message | 'Signup failed')
            })
    }
}