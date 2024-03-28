import { Dispatch, SetStateAction } from 'react';
import InputWithLabel from '../../../InputFields/InputWithLabel';

const SigninInputs = ({
  email,
  setEmail,
  password,
  setPassword,
}: {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className='space-y-6'>
      <InputWithLabel
        label='Email'
        placeholder='Enter your Email'
        type='email'
        value={email}
        setValue={setEmail}
      />
      <InputWithLabel
        label='Password'
        placeholder='Enter your password'
        type='password'
        value={password}
        setValue={setPassword}
      />
    </div>
  );
};

export default SigninInputs;
