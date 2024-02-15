import ChangeEmailLayout from "./ChangeEmailLayout";

const ChangeEmailCon = () => {
  return (
    <main className="w-full h-full  flex  justify-center pt-6 lg:items-center ">
      <div className=" sm:w-[80%] md:w-[70%] lg:w-[60%]  xl:w-[50%]  border border-opacity-20 rounded-lg flex justify-center items-center py-10 ">
        <div className="w-[80%]  flex flex-col justify-between  lg:gap-20">
          <div className="text-center">
            <h1 className="font-bold text-2xl mb-4">Change Email</h1>
            <h2 className="font-normal text-base sm:text-lg">
              To change your email, please fill the form below
            </h2>
          </div>
          <ChangeEmailLayout />
        </div>
      </div>
    </main>
  );
};

export default ChangeEmailCon;
