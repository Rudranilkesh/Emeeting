import clsx from "clsx"
import { SignIn, SignUp, useUser } from "@clerk/react"
import { Navigate } from "react-router-dom";

const Login = ({ mode = "login" }) => {

  const isRegister = mode === "register";
  const {isLoaded, isSignedIn} = useUser();

  if(isLoaded && isSignedIn) {
    return <Navigate to="/dashboard" replace/>
  }

  return (
    <div className={clsx(
      'min-h-screen',
      'w-full',
      'bg-[url("/layout_bg.png")]',
      'bg-cover',
      'bg-center',
      'bg-no-repeat',
      'text-slate-800',
      'p-4',
      'md:p-6',
      'lg:p-8',
      'flex',
      'items-center',
      'justify-center',
      'font-sans'
    )}>
      <div className={clsx('w-full flex justify-center py-2')}>
        {isRegister ? (
          <SignUp routing="path" path="/register" signInUrl="/login" fallbackRedirectUrl="/dashboard"/>
        ) : (
          <SignIn routing="path" path="/login" signUpUrl="/register" fallbackRedirectUrl="/dashboard"/>
        )}
      </div>
    </div>
  )
}

export default Login
