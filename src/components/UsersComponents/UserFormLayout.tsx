import * as z from "zod";
import toast from "react-hot-toast";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import axios from "axios";
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
import { useCreateUserStore } from "../../context/auth/createUser";
import ShowToaster from "../core/ShowToaster";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../../lib/axiosClient";

const UserFormLayout = ({ type }: { type: "update" | "create" }) => {
  const setLoading = useCreateUserStore((state) => state.setLoading);
  const loading = useCreateUserStore((state) => state.loading);
  const setSuccess = useCreateUserStore((state) => state.setSuccess);
  const [email, setEmail] = useState("");
  const formSchema = z.object({
    fullname:
      type === "create"
        ? z
            .string()
            .min(2, {
              message: "username can not be empty ",
            })
            .max(50)
        : z.string(),
    username:
      type === "create"
        ? z
            .string()
            .min(2, {
              message: "username can not be empty ",
            })
            .max(50)
        : z.string(),
    phoneNumber:
      type === "create"
        ? z
            .string()
            .min(2, {
              message: "username can not be empty ",
            })
            .max(50)
        : z.string(),
    email:
      type === "create"
        ? z
            .string()
            .min(2, {
              message: "username can not be empty ",
            })
            .max(50)
        : z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      username: "",
      phoneNumber: "",
      email: "",
    },
  });
  // Access the client
  const queryClient = useQueryClient();
  const submitEmail = async (ema: string) => {
    await axiosClient
      .post(`/admin/auth/add_user`, { email: ema })
      .then((response) => response)
      .catch((error) => error);
  };

  const {
    mutate: handleSubmit,
    isSuccess,
    data,
  } = useMutation({
    mutationFn: submitEmail,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("hello");

    setLoading(true);
    handleSubmit(values.email);
    if (isSuccess) {
      setLoading(false);
      console.log(data);
    } else if (!isSuccess) {
      setLoading(false);
      toast.error("something went wrong");
      console.log(data);
    }

    console.log(values);
  }

  const handleSubmits = (values, e) => {
    e.preventDefault();
    console.log("hello");

    setLoading(true);
    handleSubmit(values.email);
    if (isSuccess) {
      setLoading(false);
      console.log(data);
    } else if (!isSuccess) {
      setLoading(false);
      toast.error("something went wrong");
      console.log(data);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-8 "
      >
        {/* Fullname Feild */}
        {type === "update" && (
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <div className="">
                  <FormLabel>Full Name</FormLabel>

                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        )}

        {/* Username Feild */}
        {type === "update" && (
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>

                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Email Field */}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* PhoneNumber Feild */}
        {type === "update" && (
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="w-full text-center">
          {/* I added the variant login in the button.tsx */}
          <Button
            className="hidde"
            variant="login"
            size="lg"
            disabled={loading}
          >
            {loading && <ArrowPathIcon className="h-4 w-4 animate-spin mr-4" />}
            {loading ? "Submitting" : "Submit"}
          </Button>
          <button type="submit">Help</button>
        </div>
      </form>
      <ShowToaster />
    </Form>
  );
};

export default UserFormLayout;
