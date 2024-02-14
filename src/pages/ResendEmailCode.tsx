import { useVerifyEmailStore } from "../context/auth/verifyEmailStore";

import ShowToaster from "../components/core/ShowToaster";

import mailImg from "../assets/images/mailImg.jpg";

import ResendEmailCodeForm from "../components/ResendEmailCode.tsx/ResendEmailCodeForm";

const ResendEmailCode = () => {
  const isEmailVerified = useVerifyEmailStore((state) => state.verified);

  return (
    <main className="w-full h-full  flex  justify-center items-center">
      {!isEmailVerified && <p>{isEmailVerified}</p>}
      <div className="  w-[90%] sm:w-[80%] h-[80%] border border-opacity-20 rounded-lg flex justify-center items-center ">
        <div className="w-[95%] sm:w-[80%]  flex flex-col justify-between gap-10 relative">
          <div className="text-center">
            <h1 className="font-bold text-2xl mb-4">Email Verification</h1>
            <h2 className="font-normal text-base sm:text-lg">
              Enter your email address
            </h2>
          </div>

          <div className="w-full flex items-center justify-center">
            <img src={mailImg} alt="" className="w-[200px] h-[200px]" />
          </div>
          <ResendEmailCodeForm />
        </div>
      </div>
      <ShowToaster />
    </main>
  );
};

export default ResendEmailCode;
