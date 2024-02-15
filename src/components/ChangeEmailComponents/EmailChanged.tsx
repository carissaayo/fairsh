import { useNavigate } from "react-router-dom";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useManageAccountStore } from "../../context/account/getAccount";

const EmailChanged = () => {
  const navigate = useNavigate();
  const setSuccess = useManageAccountStore((state) => state.setSuccess);
  const success = useManageAccountStore((state) => state.success);
  const loading = useManageAccountStore((state) => state.loading);
  return (
    <div className="">
      <AlertDialog open={success}>
        <AlertDialogTrigger>
          <Button variant="login" size="lg" type="submit" disabled={loading}>
            {loading && <ArrowPathIcon className="h-4 w-4 animate-spin mr-4" />}

            {loading ? "Submitting" : "Submit"}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <div className="text-center"></div>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg text-center">
              Email Changed
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-center">
              Your email has been changed successfully
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="w-full flex items-center justify-center">
              <AlertDialogAction
                onClick={() => {
                  setSuccess(false);
                  navigate("/");
                }}
                className="bg-[#0A05F8] text-white hover:bg-[#0A05F8] w-[100px]"
              >
                Ok
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EmailChanged;
