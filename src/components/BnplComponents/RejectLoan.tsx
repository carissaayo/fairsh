import toast from "react-hot-toast";
import axiosClient from "../../lib/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ColorRing } from "react-loader-spinner";
import { useCallback } from "react";
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
import { Input } from "../ui/input";
import { useBnplStore } from "../../context/Bnpl/getBnpl";

const RejectLoan = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const loading = useBnplStore((state) => state.actionLoading);
  const setLoading = useBnplStore((state) => state.setActionLoading);
  const done = useBnplStore((state) => state.done);
  const setDone = useBnplStore((state) => state.setDone);
  const rejectReason = useBnplStore((state) => state.rejectReason);
  const setRejectedReason = useBnplStore((state) => state.setRejectReason);
  const setRefetch = useBnplStore((state) => state.setRefetch);

  const rejectLoan = useCallback(async () => {
    setLoading(true);

    await axiosClient
      .post(`/admin/bnpl/${id}`, {
        action: "reject",
        rejectReason,
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        setDone(true);
        toast.success("The Bnpl has been rejected");
        setRejectedReason("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.response.status === 400)
          return toast.error("Please provide a reason for this rejection");
        toast.error("something went wrong");
      });
  }, [rejectReason, id]);

  const { mutate: bnplRejectFn } = useMutation({
    mutationFn: () => rejectLoan(),
    // onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bnpls"] }),
  });

  const handleReject = (e) => {
    e.preventDefault();
    bnplRejectFn();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="bg-red-700 hover:bg-red-800 dark:text-white"
          // onClick={() => setDone(false)}
        >
          Reject
        </Button>
      </AlertDialogTrigger>
      {loading && (
        <AlertDialogContent className="flex items-center justify-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </AlertDialogContent>
      )}
      {!loading && done && (
        <AlertDialogContent className="flex flex-col items-center justify-center">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Rejected!
            </AlertDialogTitle>
            <AlertDialogDescription>
              <p className="mb-2 text-black dark:text-white text-base">
                The Bnpl has been rejected successfully
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="w-full flex items-center justify-center gap-8 ">
              <AlertDialogAction
                className="bg-green-700 hover:bg-green-700 w-20"
                onClick={() => {
                  setDone(false);
                  setRefetch(true);
                }}
              >
                Ok
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
      {!loading && !done && (
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are You Sure?</AlertDialogTitle>
            <AlertDialogDescription>
              <p className="mb-2 text-black dark:text-white text-base">
                This action cannot be undone. This will permanently reject the
                loan.
              </p>
              <Input
                value={rejectReason}
                onChange={(e) => setRejectedReason(e.target.value)}
                className="text-black text-base"
                placeholder="Enter the reason for rejecting the loan"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="w-full flex items-center justify-center gap-8">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={(e) => handleReject(e)}
                className="bg-red-600 hover:bg-red-600"
              >
                Reject
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};

export default RejectLoan;
