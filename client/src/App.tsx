import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './App.css';
import { loader as redirectToHome } from './components/pages/Home/Home';
import Login from './components/pages/auth/Login/Login';
import Signup from './components/pages/auth/Signup/Signup';
import './styles/customUtilities.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} loader={redirectToHome} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route path='/'>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
