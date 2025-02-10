import { useContext, useRef, useState } from "react"
import { AuthContext } from "../../Providers/Providers"
import { sendPasswordResetEmail } from "firebase/auth"
import auth from "../../firebase/firebase.init"
import { Link } from "react-router-dom"

const Login = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const { signInUser } = useContext(AuthContext)
    const emailRef = useRef(null)

    const handleSingInUser = (e) => {
        e.preventDefault()

        setError('')
        setSuccess(false)
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        signInUser(email, password)
            .then((result) => {
                console.log(result.user)
                setSuccess(true)
            })
            .catch((error) => {
                console.log(error.message)
                setError(false)
                setError(error.message)
            })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value

        if (!email) {
            console.log('Use verified email address')
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Send verification email')
                })
                .catch((error) => {
                    console.log(error.message)
                })
        }
    }
    return (
        <div className="card bg-base-100 w-full mx-auto md:my-12 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSingInUser} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="p-4 font-medium ">
                Create an Account ?
                <Link to='/order' className="text-green-500 ml-2 underline ">Sign Up</Link>
            </p>
        </div>
    )
}

Login.propTypes = {}

export default Login