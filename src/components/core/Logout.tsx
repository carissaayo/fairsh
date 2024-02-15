import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useNavigate } from "react-router-dom";

const Logout = ({ mobile, subnav }: { mobile?: boolean; subnav?: boolean }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("data", null);

    window.location.reload();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div
          className={`${
            mobile
              ? "flex items-center gap-6  w-full hover:cursor-pointer border-b border-opacity-20 pb-8 pl-6  h-[30px]"
              : "flex items-center gap-2  w-full hover:cursor-pointer"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ArrowLeftEndOnRectangleIcon
            className={`${mobile ? "w-8 h-8" : "w-6 h-6"} `}
          />

          <span
            className={`${mobile ? "text-lg" : "capitalize text-xl font-medium"}
            ${subnav ? "text-base" : ""}`}
          >
            Log Out
          </span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Are you sure you want to logout?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="w-full flex items-center justify-center gap-8">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>
              Continue
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default Logout;
