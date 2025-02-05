import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className="flex flex-col items-center justify-center md:my-12">
            <img src="https://media.tenor.com/U2fVhJHF1bAAAAAi/error.gif" alt="" />
            <p className="text-xl font-bold">Page not found</p>
            <button onClick={handleBack} className="btn btn-error my-3">Go Back</button>
        </div>
    )
}

ErrorPage.propTypes = {}

export default ErrorPage