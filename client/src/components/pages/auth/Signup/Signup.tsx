import { useState } from 'react';
import AuthContainer from '../AuthContainer';
import SignupInputs from './SignupInputs';
// import { signupReq } from '../../../api';
import { useNavigate } from 'react-router-dom';
import Quote from '../Quote';
import PrimaryButton from '../../../common/Buttons/PrimaryButton';
import AuthHeader from '../AuthHeader';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // const submitHandler = async () => {
  //   const data: SignupInput = { name: username, password, email };
  //   const response = await signupReq(data);
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
            head='Create an account'
            subHead='Already have an account? '
            linkLabel='Login'
            linkTo='/login'
          />
          <SignupInputs
            username={username}
            password={password}
            email={email}
            setUsername={setUsername}
            setPassword={setPassword}
            setEmail={setEmail}
          />
          <PrimaryButton
            label='Signup'
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

export default Signup;
