import React, { useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import InputComponent from '../../components/common/InputComponent';
import { useLogin } from '../../hooks/query/useAuth';

const initialValues = {
  email: '',
  password: '',
};
const Login = () => {
  const [passwordIcon, setPasswordIcon] = useState(true);
  const togglePasswordIcon = () => setPasswordIcon(!passwordIcon);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { values, handleChange, errors, handleSubmit } = useLogin({
    initialValues,
    onSuccess: () => {
      navigate('/');
    },
    onError: (err) => {
      setErrorMessage(err.response.data.message);
    },
  });
  return (
    <>
      <div className='login-wrapper'>
        <form action='' onSubmit={handleSubmit} className=' login-form'>
          {errorMessage && (
            <div className='alert--error mb-2x'>{errorMessage}</div>
          )}

          <h3 className='text-center mb-3'>Login</h3>
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
          <p className=' text-center mt-3x'>
            Don't have an account ?
            <Link to='/signup' className='link-white ml-2x'>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
