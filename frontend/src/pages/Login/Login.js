import React, { useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import InputComponent from '../../components/common/InputComponent';
import { loginAction, useLogin } from '../../hooks/query/useAuth';
import { addUserDetail } from '../../slices/data/authSlice';

import { FaRegUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const initialValues = {
  email: '',
  password: '',
};
const Login = () => {
  const [passwordIcon, setPasswordIcon] = useState(true);
  const togglePasswordIcon = () => setPasswordIcon(!passwordIcon);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { values, handleChange, errors, handleSubmit } = useLogin({
    initialValues,
    onSuccess: (data) => {
      const { email, name } = data;
      loginAction(data);
      dispatch(addUserDetail({ email, name }));
      navigate('/');
    },
    onError: (err) => {
      setErrorMessage(err.response.data.message);
    },
  });
  return (
    <>
      <div className='login-wrapper'>
        <div className=' login-form'>
          <div className='login-form--left'>
            <h4 className='heading'>Welcome</h4>
            <h3 className='sub-heading'>
              Practitioner Profile Management System
            </h3>
          </div>
          <div className='divider'></div>
          <form action='' onSubmit={handleSubmit} className='login-form--right'>
            {errorMessage && (
              <div className='alert--error mb-2x'>{errorMessage}</div>
            )}
            <div className='login-icon'>
              <FaRegUser size={32} />
            </div>
            <h3 className='title mb-5'>Login</h3>
            <InputComponent
              name={'email'}
              type='email'
              labelText={'Email'}
              onChange={handleChange}
              placeholder={'someone@mail.com'}
              value={values.email}
              isRequired={true}
              errorMessage={errors.email}
            />

            <InputComponent
              name={'password]'}
              labelText={'Password'}
              type={`${passwordIcon ? 'password' : 'text'}`}
              onChange={handleChange}
              placeholder={'someone@mail.com'}
              value={values.password}
              isRequired={true}
              errorMessage={errors.password}
              icon={
                <div
                  className='input-group-icon'
                  onClick={() => togglePasswordIcon()}
                >
                  {passwordIcon ? <BsEyeFill /> : <BsEyeSlashFill />}
                </div>
              }
            />
            <button type='submit' className='btn btn-secondary btn--block'>
              Log In
            </button>
            <p className=' text-center mt-5x'>
              Don't have an account ?
              <Link to='/signup' className='link-white ml-2x'>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
