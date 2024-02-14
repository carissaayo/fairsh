import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import ShowToaster from "../core/ShowToaster";

import { useCreateUserStore } from "../../context/auth/createUser";
import axiosClient from "../../lib/axiosClient";

export default function AddUser() {
  const loading = useCreateUserStore((state) => state.loading);
  const errorMessage = useCreateUserStore((state) => state.errorMessage);
  const email = useCreateUserStore((state) => state.email);
  const success = useCreateUserStore((state) => state.success);

  const setErrorMessage = useCreateUserStore((state) => state.setErrorMessage);
  const setLoading = useCreateUserStore((state) => state.setLoading);
  const setSuccess = useCreateUserStore((state) => state.setSuccess);
  const setEmail = useCreateUserStore((state) => state.setEmail);
  // Access the client
  const queryClient = useQueryClient();

  const submitEmail = async (ema: string) => {
    setLoading(true);
    await axiosClient
      .post(`/admin/auth/add_user`, { email: ema })
      .then(() => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        error.response.status === 403
          ? toast.error("You are not authorized")
          : toast.error("something went wrong, please try again");
        setLoading(false);
        return error;
      });
  };

  const { mutate: submitFn } = useMutation({
    mutationFn: (email: string) => submitEmail(email),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setErrorMessage("You must enter an email address");
      return;
    }
    submitFn(email);
  };

  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="bg-[#0A05F8]  text-white hover:bg-[#0A05F8] hover:scale-105"
            size="lg"
            onClick={() => setSuccess(false)}
          >
            Add New User
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[80%] xs:max-w-[70%] sm:max-w-[60%] lg:max-w-[45%] xl:max-w-[40%]  h  flex flex-col  ">
          <DialogHeader className="mb-0">
            <DialogTitle className="text-2xl">Invite User</DialogTitle>
          </DialogHeader>
          {!success && (
            <div className="flex items-center  w-full  ">
              <form
                className="w-full flex items-center flex-col "
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="w-full flex flex-col  mb-4">
                  <label htmlFor="mb-2">Email</label>

                  <Input
                    type="email"
                    className="flex-1 h-[40px] border-black w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  {errorMessage && (
                    <p className="text-red-600 text-sm">{errorMessage}</p>
                  )}
                </div>
                <Button
                  className="hidde"
                  variant="login"
                  size="lg"
                  disabled={loading}
                >
                  {loading && (
                    <ArrowPathIcon className="h-4 w-4 animate-spin mr-4" />
                  )}
                  {loading ? "Submitting" : "Submit"}
                </Button>
              </form>
            </div>
          )}

          {success && (
            <div className="">
              <p className="mb-2">
                An invitation mail has been sent to the email address
              </p>

              <DialogClose asChild>
                <div className="w-full flex items-center justify-center">
                  <Button
                    className="bg-[#0A05F8]  text-white hover:bg-[#0A05F8] hover:scale-105"
                    size="lg"
                  >
                    OK
                  </Button>
                </div>
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <ShowToaster />
    </div>
  );
}
