import React from 'react'
import { useState } from 'react'
import Header from './components/Header/Header'
import Label from './components/Label/Label'
import { useHistory } from 'react-router'
import './login.css'


const Login = () => {
    const history = useHistory();
    const usuChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
        console.log(usuario)
    }
    const [dbUsuarios] = useState([
        {
            email: 'a@gmail.com',
            password: '1234'
        }, {
            email: 'ab@gmail.com',
            password: '1234'
        }])

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    }
    );
    const [error,setError] = useState('')
    const sendForm = () => {
        dbUsuarios.forEach(function (elem) {
            if (elem.email === usuario.email && elem.password === usuario.password) {
                console.log("a")
                history.push("/home")
            } else {
                setError('Usuario Incorrecto')
            }
        })
    }

    return (<form className="login-container">
        <div className="login-content">
            <Header />
            <Label text="Email" />
            <div className="input-container">
            <input
                className="input-regular"
                id='email'
                name='email'
                type='email'
                placeholder="Ingresa tu correo electrónico"
                aria-describedby="emailHelp"
                value={usuario.email}
                onChange={usuChange}
            />
            </div>
            <Label text="Contraseña" />
            <div className="input-container">
                <input
                    className="input-regular"
                    id='password'
                    name='password'
                    type='password'
                    placeholder="Ingresa tu contraseña"
                    aria-describedby="passwordHelp"
                    value={usuario.password}
                    onChange={usuChange}
                />
            </div>
            <div className="login-submit-button-container">
                <button onClick={sendForm} className="login-submit-button">
                    Login
                </button>
                
            </div>
            {
                    error !== '' &&
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>

                }
        </div>
    </form>);
}
export default Login;