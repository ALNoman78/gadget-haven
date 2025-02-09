import { useContext, useRef, useState } from "react"
import { AuthContext } from "../../Providers/Providers"
import { sendPasswordResetEmail } from "firebase/auth"
import auth from "../../firebase/firebase.init"

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
        const email = emailRef

        if (!email) {
            console.log('send   ')
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
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleForgetPassword} className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {}

export default Login