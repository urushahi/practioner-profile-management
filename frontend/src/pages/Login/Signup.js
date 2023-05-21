import React, { useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import InputComponent from '../../components/common/InputComponent';
import { useSignUp } from '../../hooks/query/useAuth';
import { routes } from '../../constants/routes';

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
        <form action='' onSubmit={handleSubmit} className='login-form'>
          <h3 className='text-center mb-3'>Sign Up</h3>
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
    </>
  );
};

export default Signup;
