import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword, startRegisterWithEmailPasswordName } from '../redux/actions/auth';
import validator from "validator";
import styled from 'styled-components';
import hero from "../images/hero-bg.png";
import { Link } from 'react-router-dom';
import { removeError, setError } from '../redux/actions/ui';

const LoginCard = styled.div`
    background: url(${hero});
    background-size: contain;
    width: 100%;
    height: 720px !important;
`

export const Register = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui)
    const [values, handleInputChange, reset] = useForm({
        name: 'Edwin Caicedo venté',
        email: 'edwin123067@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name, email, password, password2 } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(values);
        if (isformValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isformValid = () => {

        if (name.trim().length === 0) {
            console.log('Name in required!');
            dispatch(setError('Name in required'));
            return false;
        } else if (!validator.isEmail(email)) {
            console.log('Email is not valid!');
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            console.log('Password min 5 length')
            dispatch(setError('Password min 5 length'));
            return false;
        }


        dispatch(removeError());
        return true;
    }

    return (
        <LoginCard className='container-fluid h-100'>
            <div className='row justify-content-center h-100'>
                <div className="col-md-3 mt-auto mb-auto">
                    <h1 className='text-center animate__animated animate__fadeIn animate__faster'>Registrate</h1>
                    {msgError &&
                        <div className='auth__alert-error'>
                            {msgError}
                        </div>
                    }
                    <form
                        className='animate__animated animate__fadeIn animate__faster'
                        onSubmit={handleRegister}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="form-control mb-2"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={name}
                        />

                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            className="form-control mb-2"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={email}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="form-control mb-2"
                            onChange={handleInputChange}
                            value={password}
                        />

                        <input
                            type="password"
                            placeholder="Confirm password"
                            name="password2"
                            className="form-control mb-2"
                            onChange={handleInputChange}
                            value={password2}
                        />

                        <input
                            type='submit'
                            className='btn btn-dark btn-sm btn-block'
                            value='Login'
                        />
                    </form>
                    <div
                        className="google-btn mb-2 animate__animated animate__fadeIn animate__faster"
                        onClick={() => { }}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Registrate con Google</b>
                        </p>
                    </div>
                    <Link
                        to="/auth/login"
                        className="link animate__animated animate__fadeIn animate__faster"
                    >
                        Quieres ingresar?
                    </Link>
                </div>
            </div>
        </LoginCard>
    )
}
