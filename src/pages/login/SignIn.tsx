import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { arrayObj } from '../../assets/registrations'

import CustomInput from '../../components/login/CustomInput'
import SendButton from "../../components/login/SendButton"
import AnotherMethod from "../../components/login/AnotherMethod"

import '../../styles/login/signIn.scss'

function SignIn() {
    const [errorLogin, setErrorLogin] = useState<string | null>(null)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("authKey")) {
            navigate("/account");
        }
    }, [])

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = password.length >= 8

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newObj = {
            email: email,
            password: password
        }

        const user = arrayObj.find(obj => obj.email === newObj.email && obj.password === newObj.password)


        if (user && user.key) {
            localStorage.setItem('authKey', user.key);
            setErrorLogin('');
            navigate("/account");
        }
        else {
            setErrorLogin('Email ou senha inválidos')
        }

    }

    return (
        <div className='singIn'>
            <div className="singInContainer fade-in-up">
                {
                    errorLogin && (
                        <div className="errorLogin">
                            <p>{errorLogin}</p>
                        </div>
                    )
                }
                <div>
                    <h1>Faça login para continuar</h1>
                </div>
                <form className="formLogin" onSubmit={handleSubmit}>
                    <CustomInput
                        inputType='email'
                        errorMessage='Email inválida'
                        placeholder='Email'
                        state={email}
                        setState={setEmail}
                        isValid={isEmailValid}
                    />

                    <CustomInput
                        inputType='password'
                        errorMessage='Senha inválida'
                        placeholder='Senha'
                        state={password}
                        setState={setPassword}
                        isValid={isPasswordValid}
                    />

                    <div className='forgot'>
                        <Link to={'/forgot-password'}>
                            <p>esqueceu a senha?</p>
                        </Link>
                    </div>

                    <SendButton
                        submit='Entrar'
                        isDisabled={!(isEmailValid && isPasswordValid)}
                    />
                </form>

                <AnotherMethod />

                <div className="signOut">
                    <p>não tem conta?</p>
                    <Link to={'/signup'}>
                        <p>Cadastre-se</p>
                    </Link>
                </div>
                <div>
                    <Link to={'/home'}>
                        <p>Página inicial</p>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default SignIn
