import Header from './Header';
import { useState } from 'react';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div className="relative h-screen">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
          alt="background-image"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <form className="w-3/12 p-12 bg-black bg-opacity-80 text-white rounded-lg">
          <h1 className = "font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {/* conditional rendering  */}
           {!isSignInForm && (
             <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-800 rounded"
          />
          )}

          <input
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 w-full bg-gray-800 rounded"
          />
         
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-full bg-gray-800 rounded"
          />
          <button className="p-2 m-2 w-full bg-red-600 hover:bg-red-700 rounded">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className='py-4 cursor-pointer' onClick = {toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
