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

import { useChangePasswordStore } from "../../context/auth/changePasswordStore";
import toast from "react-hot-toast";
import ShowToaster from "../core/ShowToaster";
import axiosClient from "../../lib/axiosClient";
import { useMutation } from "@tanstack/react-query";
import EmailChanged from "./EmailChanged";
import { useManageAccountStore } from "../../context/account/getAccount";

const ChangeEmailLayout = () => {
  const setLoading = useManageAccountStore((state) => state.setLoading);
  const setSuccess = useManageAccountStore((state) => state.setSuccess);

  const formSchema = z.object({
    email: z
      .string()
      .min(2, {
        message: "email can not be empty",
      })
      .max(50),
    newEmail: z
      .string()
      .min(2, {
        message: "new email can not be empty ",
      })
      .max(50),
    confirmNewEmail: z
      .string()
      .min(2, {
        message: "email can not be empty or less than 8 characters",
      })
      .max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      newEmail: "",
      confirmNewEmail: "",
    },
  });

  const changeEmail = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    await axiosClient
      .patch(`/admin/auth/change_password`, { ...values })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setSuccess(true);
        toast.success("Your Email has been changed");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.request.status === 403) {
          return toast.error("You are not authorized");
        }
        toast.error(error.message);
        return error;
      });
  };
  const { mutate: submitFn } = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => changeEmail(values),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    submitFn(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-8 "
      >
        {/* Old Password Feild */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="">
                <FormLabel>Current Email</FormLabel>

                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        {/* New Password Feild */}
        <FormField
          control={form.control}
          name="newEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Email</FormLabel>

              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm New Field */}
        <FormField
          control={form.control}
          name="confirmNewEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm New Email</FormLabel>

              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full text-center">
          <EmailChanged />
        </div>
      </form>
      <ShowToaster />
    </Form>
  );
};

export default ChangeEmailLayout;
