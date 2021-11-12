import { useState } from "react"

export const Register = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repeatPass, stRepeatPass] = useState('');

    const register = (e) => {
        e.preventDefault();
        console.log(email, pass, repeatPass);

        if (pass !== repeatPass) {
            console.log('repeat pass is wrong!')
        } else {
            const user = {
                email: 'email',
                password: 'pass'
            }
    
            localStorage.setItem('user', user);
    
            setEmail('');
            setPass('');
            stRepeatPass('');
        }

        
    }

    return(
        <div>
            <h3>Registration</h3>

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

                <input
                    namae='repeat-password'
                    type='password'
                    placeholder='repeat password'
                    value={repeatPass}
                    onChange={(e) => stRepeatPass(e.target.value)}
                />
                <button>
                    register
                </button>
            </form>
        </div>
    )
}