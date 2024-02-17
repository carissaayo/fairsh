import toast from "react-hot-toast";
import { useRetailerPage } from "../../context/Retailers/getRetailerPage";
import axiosClient from "../../lib/axiosClient";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

import { useMutation } from "@tanstack/react-query";

const SuspendRetailer = ({ retailerEmail }: { retailerEmail: string }) => {
  const loading = useRetailerPage((state) => state.suspending);
  const setLoading = useRetailerPage((state) => state.setSuspending);
  const handleSuspend = async () => {
    await axiosClient
      .post(`/admin/auth/suspend_user`, {
        email: retailerEmail,
        action: "suspend",
      })
      .then((response) => {
        setLoading(true);
        console.log(response.data?.data);
        // setGadgets(response.data?.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
        return error;
      });
  };
  const { mutate: submitFn } = useMutation({
    mutationFn: () => handleSuspend(),
  });

  const handleSubmit = async () => {
    submitFn();
  };
  return (
    <main className="">
      <AlertDialog>
        <AlertDialogTrigger>
          <Button
            className="text-[#F31414] hover:bg-[#FFD3D3] hover:text-[#F31414] border-[#F31414] border-opacity-50 hover:scale-105"
            size="lg"
            variant="outline"
          >
            {loading ? "Suspending" : "Suspend Retailer"}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-xl font-bold">
              Are You Sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-xl text-black dark:text-white">
              You can unsuspend Retailer later.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex items-center justify-center gap-8 w-full">
              <AlertDialogCancel className="hover:scale-105 text-lg">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                disabled={loading}
                className="text-white bg-[#F31414] hover:bg-[#F31414] hover:text-white border-[#F31414] border-opacity-50 hover:scale-105 text-lg"
                onClick={() => handleSubmit()}
              >
                Suspend
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};

export default SuspendRetailer;
