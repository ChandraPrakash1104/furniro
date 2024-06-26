import { useEffect, useState } from 'react';
import AuthContainer from '../AuthContainer';
import SignupInputs from './SignupInputs';
// import { signupReq } from '../../../api';
import { useNavigate } from 'react-router-dom';
import Quote from '../Quote';
import PrimaryButton from '../../../common/Buttons/PrimaryButton';
import AuthHeader from '../AuthHeader';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authState } from '../../../../store/auth';
import { BACKEND_URL } from '../../../../utils/api';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useRecoilState(authState);

  useEffect(() => {
    if (isAuth.isAuthenticated) {
      navigate('/home');
    }
  }, [isAuth]);

  const submitHandler = async () => {
    const formdata = { username, password, firstname, lastname, email };
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/user/register`,
        formdata
      );

      const parsedData = await response.data;
      const userDetails = JSON.stringify(parsedData.userDetails);
      localStorage.setItem('user', userDetails);
      setUsername('');
      setPassword('');
      setFirstname('');
      setLastname('');
      setEmail('');
      setIsAuth({ isAuthenticated: true, user: parsedData.userDetails });
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className='lg:grid lg:grid-cols-2 h-screen '>
      <AuthContainer>
        <div className='space-y-8 w-4/5 sm:w-1/2'>
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
            firstname={firstname}
            lastname={lastname}
            setUsername={setUsername}
            setPassword={setPassword}
            setEmail={setEmail}
            setFirstname={setFirstname}
            setLastname={setLastname}
          />
          <PrimaryButton
            label='Signup'
            size='medium'
            loading={loading}
            styles='w-full rounded font-semibold'
            handleClick={submitHandler}
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
