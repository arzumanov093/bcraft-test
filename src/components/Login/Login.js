import { useState } from "react"

export const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const register = (e) => {
        e.preventDefault();
        console.log(email, pass)

        setEmail('');
        setPass('');
    }

    return(
        <div>
            <h3>Sign in</h3>

            <form onSubmit={register}>
                <input
                    namae='email'
                    type='email'
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    namae='password'
                    type='password'
                    placeholder='password'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <button>
                    sign in
                </button>
            </form>
        </div>
    )
}