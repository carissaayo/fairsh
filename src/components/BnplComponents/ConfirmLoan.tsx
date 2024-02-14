import { useCallback } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ColorRing } from "react-loader-spinner";
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

import axiosClient from "../../lib/axiosClient";
import { useBnplStore } from "../../context/Bnpl/getBnpl";

const ConfirmLoan = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const loading = useBnplStore((state) => state.actionLoading);
  const setLoading = useBnplStore((state) => state.setActionLoading);
  const done = useBnplStore((state) => state.done);
  const setDone = useBnplStore((state) => state.setDone);
  const setRefetch = useBnplStore((state) => state.setRefetch);
  const refetch = useBnplStore((state) => state.refetch);
  const approveLoan = useCallback(async () => {
    setLoading(true);
    await axiosClient
      .post(`/admin/bnpl/${id}`, {
        action: "approve",
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        setDone(true);
        toast.success("The Bnpl has been approved!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("something went wrong");
      });
  }, [id]);

  const { mutate: bnplApproveFn } = useMutation({
    mutationFn: () => approveLoan(),
    // onSuccess: () => queryClient.invalidateQueries({ queryKey: ["bnpls"] }),
  });

  const handleApprove = (e) => {
    e.preventDefault();
    bnplApproveFn();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-green-700 hover:bg-green-800 dark:text-white">
          Approve
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
              Approved!
            </AlertDialogTitle>
            <AlertDialogDescription>
              <p className="mb-2 text-black dark:text-white text-base">
                The Bnpl has been approved successfully
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
                  console.log(refetch);
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
            <AlertDialogTitle className="text-center">
              Are You Sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              <p className="mb-2 text-black dark:text-white text-base text-center">
                This action cannot be undone. This will permanently approve the
                loan.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="w-full flex items-center justify-center gap-8">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-green-700 hover:bg-green-700"
                onClick={(e) => handleApprove(e)}
              >
                Approve
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};

export default ConfirmLoan;
