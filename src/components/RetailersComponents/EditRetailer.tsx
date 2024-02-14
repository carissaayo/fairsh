import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import FormLayout from "../RetailersComponents/RetailerFormLayout";

export default function EditRetailer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-[#0A05F8]  text-white hover:bg-[#0A05F8] hover:scale-105"
          size="lg"
        >
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[70%] h-[75%] flex flex-col gap-8">
        <DialogHeader className="mb-0">
          <DialogTitle className="text-2xl">Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="flex items-center  w-full">
          <FormLayout />
        </div>
      </DialogContent>
    </Dialog>
  );
}
