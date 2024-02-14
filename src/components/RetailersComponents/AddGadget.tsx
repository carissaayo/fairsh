import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import FormLayout from "./AddGadgetForm";
import AddGadgetImages from "./AddGadgetImages";

export default function AddGadget() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-[60%] xs:w-[40%] sm:w-auto bg-[#0A05F8]  text-white hover:bg-[#0A05F8] hover:scale-105"
          size="lg"
        >
          Add New Gadget
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] lg:max-w-[80%] h-[94%] flex flex-col gap-8">
        <DialogHeader className="mb-0">
          <DialogTitle className="text-2xl">Add New Gadget</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col overflow-y-scroll  md:flex-row items-center justify-between gap-12 w-full h-full">
          <AddGadgetImages />
          <FormLayout />
        </div>
        <div className="w-full text-center">
          {" "}
          {/* I added the variant login in the button.tsx */}
          <Button
            className="bg-[#0A05F8]  text-white hover:bg-[#0A05F8] hover:scale-105"
            size="lg"
          >
            Add Gadget
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
