import { Link, Navigate } from "react-router-dom";
import FormLayout from "../components/LoginFormLayout";
import { useLoginStore } from "../context/auth/loginStore";

const Login = () => {
  const user = useLoginStore((state) => state.user);
  if (user?.accessToken) return <Navigate to="/" />;

  return (
    <main className="w-full h-full pt-20 px-6 sm:px-20 md:px-48 lg:px-32 flex flex-col ">
      <div className="text-center flex-1">
        <h1 className="font-bold text-2xl text-center mb-4">
          Log in Your Account
        </h1>
        <p className="text-lg">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#0A05F8]">
            Register
          </Link>
        </p>
      </div>
      <div className="flex-[2]  ">
        <FormLayout />
        <Link to="/forgot-password" className="text-[#0A05F8]">
          forgot password?
        </Link>
      </div>
    </main>
  );
};

export default Login;
