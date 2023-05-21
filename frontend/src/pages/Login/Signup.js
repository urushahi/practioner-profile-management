import React, { useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import InputComponent from '../../components/common/InputComponent';
import { useSignUp } from '../../hooks/query/useAuth';
import { routes } from '../../constants/routes';
import { FaRegUser } from 'react-icons/fa';

const initialValues = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
};
const Signup = () => {
  const [passwordIcon, setPasswordIcon] = useState(true);
  const togglePasswordIcon = () => setPasswordIcon(!passwordIcon);
  const navigate = useNavigate();

  const { values, handleChange, errors, handleSubmit } = useSignUp({
    initialValues,
    onSuccess: () => {
      navigate(routes.LOGIN);
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
            <div className='login-icon'>
              <FaRegUser size={32} />
            </div>
            <h3 className='title mb-5'>Sign Up</h3>
            <InputComponent
              name={'name'}
              labelText={'Name'}
              onChange={handleChange}
              placeholder={'e.g. John Doe'}
              value={values.name}
              errorMessage={errors.name}
            />

            <InputComponent
              name={'email'}
              isRequired={true}
              labelText={'Email'}
              onChange={handleChange}
              placeholder={'e.g. someone@mail.com'}
              value={values.email}
              errorMessage={errors.email}
              type='email'
            />

            <InputComponent
              name={'password]'}
              isRequired={true}
              labelText={'Password'}
              type={`${passwordIcon ? 'password' : 'text'}`}
              onChange={handleChange}
              placeholder={'someone@mail.com'}
              value={values.password}
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
            <InputComponent
              name={'repeatPassword]'}
              isRequired={true}
              labelText={'Repeat Password'}
              type={`${passwordIcon ? 'password' : 'text'}`}
              onChange={handleChange}
              value={values.repeatPassword}
              errorMessage={errors.repeatPassword}
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
              Sign Up
            </button>
            <p className=' text-center mt-3x'>
              Already have an account ?
              <Link to='/login' className='link-white  ml-2x'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
