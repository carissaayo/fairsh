import { TrashIcon } from "@heroicons/react/24/outline";
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

const DeleteUser = () => {
  return (
    <div className="">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div
            className="flex items-center gap-8 w-full hover:cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <TrashIcon className="w-4 h-4 text-[#F31414]" />
            <span className="">Delete User</span>
          </div>
        </AlertDialogTrigger>
        <div className="" onClick={(e) => e.stopPropagation()}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center text-xl font-bold">
                Are You Sure?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center text-xl text-black dark:text-white">
                This action cannot be undone. This will permanently delete the
                user account.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <div className=""></div>
              <div className="flex items-center justify-center gap-8 w-full">
                <AlertDialogCancel className="hover:scale-105 text-lg">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="text-white bg-[#F31414] hover:bg-[#F31414] hover:text-white border-[#F31414] border-opacity-50 hover:scale-105 text-lg">
                  Continue
                </AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </div>
      </AlertDialog>
    </div>
  );
};

export default DeleteUser;
