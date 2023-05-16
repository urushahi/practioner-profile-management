import React, { useState } from 'react';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import InputComponent from '../../components/common/InputComponent';

const Login = () => {
  const [passwordIcon, setPasswordIcon] = useState(true);
  const togglePasswordIcon = () => setPasswordIcon(!passwordIcon);

  return (
    <>
      <div className='login-wrapper'>
        <form className='login-form'>
          <h3 className='text-center mb-3'>Login</h3>
          <InputComponent
            name={'Email'}
            labelText={'Email'}
            // onChange={handleChange}
            // placeholder={'someone@mail.com'}
            // value={values.contact}
            // errorMessage={errors.contact}
          />

          <InputComponent
            name={'password]'}
            labelText={'Password'}
            type={`${passwordIcon ? 'password' : 'text'}`}
            // onChange={handleChange}
            // placeholder={'someone@mail.com'}
            // value={values.contact}
            // errorMessage={errors.contact}
            icon={
              <div
                className='input-group-icon'
                onClick={() => togglePasswordIcon()}
              >
                {passwordIcon ? <BsEyeFill /> : <BsEyeSlashFill />}
              </div>
            }
          />
          <button className='btn btn-secondary btn--block' onClick='/'>
            Log In
          </button>
          <p className='message text-center mt-3x'>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
