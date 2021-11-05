import { useState } from "react"

export const ChangePassword = () => {

    const [oldPass, setOldPass] = useState('');
    const [pass, setPass] = useState('');
    const [repeatPass, stRepeatPass] = useState('');

    const register = (e) => {
        e.preventDefault();
        console.log(oldPass, pass, repeatPass)

        oldPass('');
        setPass('');
        stRepeatPass('');
    }

    return(
        <div>
            <h3>Change password</h3>

            <form onSubmit={register}>
                <input
                    namae='old-password'
                    type='password'
                    placeholder='old password'
                    value={oldPass}
                    onChange={(e) => setOldPass(e.target.value)}
                />

                <input
                    namae='password'
                    type='password'
                    placeholder='new password'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />

                <input
                    namae='repeat-password'
                    type='password'
                    placeholder='repeat new password'
                    value={repeatPass}
                    onChange={(e) => stRepeatPass(e.target.value)}
                />
                <button>
                    change password
                </button>
            </form>
        </div>
    )
}