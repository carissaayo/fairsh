import { useState } from "react";
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
import PasswordChanged from "./PasswordChanged";
import axios from "axios";
import { useChangePasswordStore } from "../../context/auth/changePasswordStore";
import toast from "react-hot-toast";
import ShowToaster from "../core/ShowToaster";
import axiosClient from "../../lib/axiosClient";
import { useMutation } from "@tanstack/react-query";

const ChangePasswordLayout = () => {
  const setLoading = useChangePasswordStore((state) => state.setLoading);
  const setSuccess = useChangePasswordStore((state) => state.setSuccess);

  const formSchema = z.object({
    password: z
      .string()
      .min(2, {
        message: "password can not be empty or less than 8 characters",
      })
      .max(50),
    newPassword: z
      .string()
      .min(2, {
        message: "password can not be empty or less than 8 characters",
      })
      .max(50),
    confirmNewPassword: z
      .string()
      .min(2, {
        message: "password can not be empty or less than 8 characters",
      })
      .max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const changePassword = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    await axiosClient
      .patch(`/admin/auth/change_password`, { ...values })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setSuccess(true);
        toast.success("Your password has been changed");
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
    mutationFn: (values: z.infer<typeof formSchema>) => changePassword(values),
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="">
                <FormLabel>Old Password</FormLabel>

                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        {/* New Password Feild */}
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>

              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm New Field */}
        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm New Password</FormLabel>

              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full text-center">
          <PasswordChanged />
        </div>
      </form>
      <ShowToaster />
    </Form>
  );
};

export default ChangePasswordLayout;
