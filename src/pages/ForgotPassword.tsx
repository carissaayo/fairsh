import { useState } from "react";

import ForgotPasswordForm from "../components/ForgotPasswordComponents/ForgotPasswordForm";
import mailImg from "../assets/images/mailImg.jpg";
import ResetPasswordForm from "../components/ForgotPasswordComponents/ResetPasswordForm";
import PasswordReset from "../components/ForgotPasswordComponents/PasswordReset";

import { useResetPasswordStore } from "../context/auth/changePasswordStore";

const ForgotPassword = () => {
  const verified = useResetPasswordStore((state) => state.verified);

  const [done, setDone] = useState(false);
  return (
    <main className="w-full h-full  flex  justify-center items-center">
      <div className="  w-[90%] sm:w-[80%] h-[80%] border border-opacity-20 rounded-lg flex justify-center items-center ">
        <div className="w-[95%] sm:w-[80%]  flex flex-col justify-between gap-10 relative">
          <div className="text-center">
            <h1 className="font-bold text-2xl mb-4">Password Recovery</h1>
            {verified ? (
              <h2 className="font-normal text-base sm:text-lg">
                Enter the verification code and create your new password
              </h2>
            ) : (
              <h2 className="font-normal text-lg">
                Enter your email address and a verification code will be sent to
                you
              </h2>
            )}
          </div>
          {!verified && (
            <div className="w-full flex items-center justify-center">
              <img src={mailImg} alt="" className="w-[200px] h-[200px]" />
            </div>
          )}

          <ForgotPasswordForm />
          <ResetPasswordForm />
          <PasswordReset />
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
