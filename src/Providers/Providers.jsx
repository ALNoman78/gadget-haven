import { useState } from "react"
import { createContext } from "react"
import auth from "../firebase/firebase.init"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export const AuthContext = createContext(null)

const Providers = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser,
        signInUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

Providers.propTypes = {}

export default Providers