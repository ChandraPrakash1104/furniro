import { useState } from 'react';
import AuthHeader from '../AuthHeader';
import AuthContainer from '../AuthContainer';
import LoginInputs from './LoginInputs';
import Quote from '../Quote';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../common/Buttons/PrimaryButton';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const submitHandler = async () => {
  //   const data: SigninInput = { email, password };
  //   const response = await signinReq(data);
  //   const token = response?.data.token;
  //   localStorage.setItem('token', token);
  //   navigate('/blogs');
  //   console.log(response);
  // };

  return (
    <div className='lg:grid lg:grid-cols-2 h-screen '>
      <AuthContainer>
        <div className='space-y-8'>
          <AuthHeader
            head='Welcome Back'
            subHead='No account? '
            linkLabel='Signup'
            linkTo='/signup'
          />
          <LoginInputs
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
          <PrimaryButton
            label='Login'
            size='medium'
            styles='w-full rounded font-semibold'
          />
        </div>
      </AuthContainer>

      <div className='hidden lg:block '>
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
