import { useVerifyEmailStore } from "../context/auth/verifyEmailStore";

import ShowToaster from "../components/core/ShowToaster";
import VerifyEmailForm from "../components/VerifyEmailComponents/VerifyEmailForm";

import mailImg from "../assets/images/mailImg.jpg";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const isEmailVerified = useVerifyEmailStore((state) => state.verified);

  return (
    <main className="w-full h-full  flex  justify-center items-center">
      {!isEmailVerified && <p>{isEmailVerified}</p>}
      <div className="  w-[90%] sm:w-[80%] h-[80%] border border-opacity-20 rounded-lg flex justify-center items-center ">
        <div className="w-[95%] sm:w-[80%]  flex flex-col justify-between gap-10 relative">
          <div className="text-center">
            <h1 className="font-bold text-2xl mb-4">Email Verification</h1>
            <h2 className="font-normal text-base sm:text-lg">
              Enter the verification code sent to your email address
            </h2>
          </div>

          <div className="w-full flex items-center justify-center">
            <img src={mailImg} alt="" className="w-[200px] h-[200px]" />
          </div>
          <VerifyEmailForm />
          <Link
            to="/resend-email-code"
            className="text-[#0A05F8] cursor-pointer"
          >
            resend verification code?
          </Link>
        </div>
      </div>
      <ShowToaster />
    </main>
  );
};

export default VerifyEmail;
