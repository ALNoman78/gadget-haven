import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../Providers/Providers"

const Route = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if (user) {
        return children;
    }
    return (
        <NavLink to='/login'></NavLink>
    )
}

Route.propTypes = {}

export default Route