import { useNavigate } from "react-router-dom";
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
import { useResetPasswordStore } from "../../context/auth/changePasswordStore";

const PasswordReset = () => {
  const success = useResetPasswordStore((state) => state.success);

  const navigate = useNavigate();
  return (
    <div className="">
      <AlertDialog open={success}>
        <AlertDialogTrigger></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg text-center">
              Password Changed
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-center">
              Your password has been changed successfully
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="w-full flex items-center justify-center">
              <AlertDialogAction
                onClick={() => navigate("/")}
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

export default PasswordReset;
