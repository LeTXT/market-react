import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


import CustomInput from '../../components/login/CustomInput'
import SendButton from "../../components/login/SendButton"
import AnotherMethod from "../../components/login/AnotherMethod"

import { arrayObj } from '../../assets/registrations'

import '../../styles/login/signUp.scss'

function SignUp() {
    const [user, setUser] = useState<string>('')
    const [email, setemail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const navigate = useNavigate();

    const isUserValid = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/.test(user)
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;
    const isConfirmPasswordValid = password === confirmPassword;


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newUser = {
            user: user,
            email: email,
            password: password,
            key: uuidv4()
        }

        arrayObj.push(newUser)

        navigate("/signIn")
    }

    return (
        <div className='signUp'>
            <div className="signUpContainer fade-in-right">
                <div>
                    <h1>Cadastre-se</h1>
                </div>
                <form className="formLogin" onSubmit={handleSubmit} >

                    <CustomInput
                        inputType='user'
                        errorMessage='Nome inválido'
                        placeholder='Nome completo'
                        state={user}
                        setState={setUser}
                        isValid={isUserValid}
                    />

                    <CustomInput
                        inputType='email'
                        errorMessage='Email inválida'
                        placeholder='Email'
                        state={email}
                        setState={setemail}
                        isValid={isEmailValid}
                    />

                    <div className='flexPassword'>
                        <CustomInput
                            inputType='password'
                            errorMessage='Senha inválida'
                            placeholder='Senha'
                            state={password}
                            setState={setPassword}
                            isValid={isPasswordValid}
                        />

                        <CustomInput
                            inputType='password'
                            errorMessage='Senha inválida'
                            placeholder='Senha'
                            state={confirmPassword}
                            setState={setConfirmPassword}
                            isValid={isConfirmPasswordValid}
                        />
                    </div>

                    <SendButton submit='Criar' isDisabled={!(isEmailValid && isPasswordValid && isUserValid && isConfirmPasswordValid)} />

                </form>

                <AnotherMethod />

                <div className='backToSingIn'>
                    <Link to={'/signIn'}>
                        <p>Voltar a tela de login</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
