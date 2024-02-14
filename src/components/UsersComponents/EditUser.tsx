import { PencilIcon } from "@heroicons/react/24/outline";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import FormLayout from "./UserFormLayout";

export default function EditUser() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="flex items-center gap-8 w-full hover:cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <PencilIcon className="w-4 h-4" />
            <span className="">Update User</span>
          </div>
        </DialogTrigger>
        <div className="" onClick={(e) => e.stopPropagation()}>
          <DialogContent className="sm:max-w-[40%]  h  flex flex-col  ">
            <DialogHeader className="mb-0">
              <DialogTitle className="text-2xl">Edit User</DialogTitle>
            </DialogHeader>
            <div className="flex items-center  w-full  ">
              <FormLayout type="update" />
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
}
