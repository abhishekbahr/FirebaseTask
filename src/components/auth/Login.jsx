import  { useState } from 'react';
import googleIcon from './google-icon.png'; 
import { TextInput, Button } from 'carbon-components-react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin =  (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,username,password).then((userCredential) => {
            console.log(userCredential)
            navigate('/home')
        }).catch((err) => console.log(err))
    };
    const handleGoogleSignIn = async () => {
        signInWithPopup(auth,provider).then((userCredential) => {
            console.log(userCredential)
            navigate('/home')
        }).catch(err => console.log(err))
    }

    return (
        <div className=" min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md flex flex-col justify-center items-center  w-full space-y-8 bg-gray-50 rounded-lg shadow-lg">
            <div>
            <h2 className="mt-6 text-center text-3xl max-sm:text-xl font-extrabold text-gray-900">Sign in to your account</h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="flex flex-col items-center justify-center p-6 gap-4  -space-y-px">
                <div >
                    <TextInput 
                        id='email' 
                        type='email' 
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-80 max-sm:w-44'
                        placeholder='Enter Email Address' 
                        labelText={<span className='font-bold '>Email Address</span>}
                    />
                </div>
                <div>
                    <TextInput.PasswordInput 
                        id='password' 
                        type='password' 
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-80 max-sm:w-40 '
                        placeholder='Enter Password' 
                        showPasswordLabel='' 
                        hidePasswordLabel='' 
                        labelText={<span className='font-bold '>Enter Password</span>}
                    />
                </div>
            </div>
            <div>
                <h1 className='text-sm mb-2'>Don't have a account <Link to='/signup'><span className='text-blue-600 font-semibold hover:underline'>Click Here!</span></Link></h1>
                <Button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign in
                </Button>
            </div>
            </form>
            <div className='flex flex-col items-center'>
                <h1>or</h1>
                <div className='flex flex-row justify-center '>
                    <Button
                        onClick={handleGoogleSignIn}
                        className='border-2 mt-5 border-black w-full rounded-lg flex flex-row justify-center items-center gap-2 text-white bg-gray-800 hover:bg-gray-500'
                    >
                        <img className='w-10 mix-blend-normal' src={googleIcon} alt=''/>
                        Login with Google
                    </Button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;




