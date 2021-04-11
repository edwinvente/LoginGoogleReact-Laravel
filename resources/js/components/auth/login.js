import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../redux/actions/auth';
import styled from 'styled-components';
import hero from "../images/hero-bg.png";
import { Link } from 'react-router-dom';
import validator from 'validator';
import { removeError, setError } from '../redux/actions/ui';

const LoginCard = styled.div`
    background: url(${hero});
    background-size: contain;
    width: 100%;
    height: 720px !important;
`

export const Login = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector(state => state.ui)
    const [values, handleInputChange, reset] = useForm({
        email: 'gerencia@somoscreandola.com',
        password: '123456',
    })

    const { email, password } = values

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isformValid()) {
            dispatch(startLoginEmailPassword(email, password));
        }
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const isformValid = () => {

        if (!validator.isEmail(email)) {
            console.log('Email is not valid!');
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password.length < 5) {
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
                    <h1 className='text-center animate__animated animate__fadeIn animate__faster'>Meteoro</h1>
                    {msgError &&
                        <div className='auth__alert-error'>
                            {msgError}
                        </div>
                    }
                    <form
                        className='animate__animated animate__fadeIn animate__faster'
                        onSubmit={handleSubmit}
                    >
                        <input
                            type='email'
                            className='form-control mb-2'
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                        />

                        <input
                            type='password'
                            className='form-control mb-2'
                            name='password'
                            value={password}
                            onChange={handleInputChange}
                        />

                        <input
                            type='submit'
                            className='btn btn-dark btn-sm btn-block'
                            value='Login'
                            disabled={loading}
                        />
                    </form>
                    <div
                        className="google-btn mb-2 animate__animated animate__fadeIn animate__faster"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Ingresa con Google</b>
                        </p>
                    </div>
                    <Link
                        to="/auth/register"
                        className="link animate__animated animate__fadeIn animate__faster"
                    >
                        Ya estas registrado?
                    </Link>
                </div>
            </div>
        </LoginCard>
    )
}
