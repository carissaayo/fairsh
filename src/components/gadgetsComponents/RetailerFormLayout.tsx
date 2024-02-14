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
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const LoginFormLayout = () => {
  const formSchema = z.object({
    fullname: z.string(),
    username: z.string(),
    phoneNumber: z.string(),
    email: z.string(),
    storeAddress: z.string(),
    address: z.string(),
    state: z.string(),
    lga: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      username: "",
      phoneNumber: "",
      email: "",
      address: "",
      state: "",
      lga: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
        <div className="flex justify-between w-full items-center gap-20  mb-8">
          {/* Fullname Feild */}
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Full Name</FormLabel>

                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between w-full items-center gap-20 mb-8">
          {/* PhoneNumber Feild */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Phone Number</FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Username Feild */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Username</FormLabel>

                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between w-full items-center gap-20 mb-8">
          {/* Store Address Feild */}
          <FormField
            control={form.control}
            name="storeAddress"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Store Address</FormLabel>

                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*  Address Feild */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Address</FormLabel>

                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between w-full items-center gap-20 mb-8">
          {/*  State Feild */}
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>State</FormLabel>

                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* LGA Address Feild */}
          <FormField
            control={form.control}
            name="lga"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>LGA (Local Government Area)</FormLabel>

                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full text-center">
          {" "}
          {/* I added the variant login in the button.tsx */}
          <Button
            className="bg-[#0A05F8]  text-white hover:bg-[#0A05F8] hover:scale-105"
            size="lg"
          >
            Update Profile
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginFormLayout;
