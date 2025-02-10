import { useEffect, useState } from "react"
import { createContext } from "react"
import auth from "../firebase/firebase.init"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

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

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribers = onAuthStateChanged(auth , (currentUser) => {
            console.log(currentUser , 'current user')
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribers();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

Providers.propTypes = {}

export default Providers