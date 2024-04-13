import './App.css';
import LoginPage from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home';
import Redirect from './components/auth/Redirect';

const router =  createBrowserRouter([
  {
    path:'/',
    element:<Redirect/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path: "/login",
    element:<LoginPage/>
  },
  {
    path:'/home',
    element:<Home/>
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
