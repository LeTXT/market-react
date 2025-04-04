import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { arrayObj } from '../../assets/registrations'

import CustomInput from '../../components/login/CustomInput'
import SendButton from "../../components/login/SendButton"

import '../../styles/login/forgotPassword.scss'

function ForgotPassword() {
    const [errorEmail, setErrorEmail] = useState<string | null>('')
    const [email, setemail] = useState<string>('')

    const navigate = useNavigate()

    const isPasswordValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const index = arrayObj.findIndex(obj => obj.email === email)

        if (index !== -1) {
            setErrorEmail('')
            navigate("/signIn")
        }
        else {
            setErrorEmail('Email não encontrado')
        }
    }

    return (
        <div className='forgotPassword'>
            <div className='forgotPasswordContainer fade-in-down'>
                <div className="errorEmail">
                    <p>{errorEmail}</p>
                </div>
                <div>
                    <h1>Recuperar senha</h1>
                </div>
                <form className="formLogin" onSubmit={handleSubmit} >
                    <CustomInput
                        inputType='email'
                        errorMessage='Email inválida'
                        placeholder='Email'
                        state={email}
                        setState={setemail}
                        isValid={isPasswordValid}
                    />

                    <SendButton
                        submit='Enviar'
                        isDisabled={!isPasswordValid}
                    />
                </form>


                <div className='backToLogin'>
                    <Link to={'/signIn'}>
                        <p>Voltar ao login</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword