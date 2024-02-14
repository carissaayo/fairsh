import { Link } from "react-router-dom";
import FormLayout from "../components/RegisterFormLayout";
import { useRegisterStore } from "../context/auth/registerStore";

const Register = () => {
  const error = useRegisterStore((state) => state.error);

  return (
    <main className="w-full h-full pt-12 lg:pt-8 px-8 sm:px-20 md:px-32 overflow-y-scroll mb-8 flex flex-col justify-center gap-8">
      <div className="text-center">
        <h1 className="font-bold text-2xl text-center mb-4">
          Create Your Account
        </h1>
        <p className="text-lg">
          Already have an account?{" "}
          <Link to="/login" className="text-[#0A05F8]">
            login
          </Link>
        </p>
      </div>
      <div className=" ">
        <FormLayout />
        <Link to="/forgot-password" className="text-[#0A05F8] mb-3">
          forgot password?
        </Link>
        <div className="">
          <Link to="/verify-email" className="text-[#0A05F8]">
            verify email
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Register;
