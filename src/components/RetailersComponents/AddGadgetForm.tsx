import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SelectItem } from "@radix-ui/react-select";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const AddGadgetFormLayout = () => {
  const formSchema = z.object({
    name: z.string(),
    category: z.string(),
    price: z.string(),
    ram: z.string(),
    rom: z.string(),
    description: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      price: "",
      ram: "",
      rom: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="flex-1 border border-opacity-40 rounded-lg h-full flex flex-col justify-center w-full md:w-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" w-full flex items-center flex-col justify-center"
        >
          <div className="flex justify-between w-[90%] items-center gap-20  mb-8">
            {/* Fullname Feild */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Gadget Name</FormLabel>

                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between w-[90%] items-center gap-20 mb-8">
            {/* Category Feild */}
            <div className="w-full flex flex-col gap-4">
              <Label className="">Category</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="phones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phones">phones </SelectItem>
                  <SelectItem value="laptops">laptops</SelectItem>
                  <SelectItem value="tvs">TVs</SelectItem>
                  <SelectItem value="sound-system">Sound System </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between w-[90%] items-center gap-20 mb-8">
            {/* Price*/}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Price (&#8358;)</FormLabel>

                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between w-[90%] items-center gap-20 mb-8">
            {/*  RAM Feild */}
            <div className="w-full flex flex-col gap-4">
              <Label className="">RAM</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="8GB" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4GB">4GB </SelectItem>
                  <SelectItem value="6GB">6GB</SelectItem>
                  <SelectItem value="8GB">8GB</SelectItem>
                  <SelectItem value="12GB">12GB </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* ROM Field */}
            <div className="w-full flex flex-col gap-4">
              <Label className="">ROM</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="32GB" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="32GB">32GB </SelectItem>
                  <SelectItem value="64GB">64GB</SelectItem>
                  <SelectItem value="128GB">128GB</SelectItem>
                  <SelectItem value="256GB">256GB </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between w-[90%] items-center gap-20 mb-8">
            {/* Price*/}
            <div className="w-full flex flex-col gap-4">
              <Label className="">Description</Label>

              <Textarea />
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default AddGadgetFormLayout;
