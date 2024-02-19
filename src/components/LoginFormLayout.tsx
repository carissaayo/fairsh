import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ShowToaster from "./core/ShowToaster";

import { useLoginStore } from "../context/auth/loginStore";
import axiosClient from "../lib/axiosClient";

const LoginFormLayout = () => {
  const queryClient = useQueryClient();

  // LoginStore
  const setLoading = useLoginStore((state) => state.setLoading);
  const setUser = useLoginStore((state) => state.setUser);
  const setSuccess = useLoginStore((state) => state.setSuccess);
  const loading = useLoginStore((state) => state.loading);

  // MainStore

  const formSchema = z.object({
    email: z
      .string()
      .min(2, {
        message: "email can not be empty and must be a valid email",
      })
      .max(50),
    password: z
      .string()
      .min(2, {
        message: "password can not be empty and must not be less 8 characters ",
      })
      .max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const LoginUser = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    await axiosClient
      .post(`/admin/auth/sign_in`, { ...values })
      .then((response) => {
        // console.log(response.data.data);
        setUser(response.data?.data);
        localStorage.setItem("data", JSON.stringify(response.data?.data));
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.request.status === 400) {
          return toast.error("Incorrect Credentials");
        }
        toast.error(error.message);
        return error;
      });
  };
  const { mutate: submitFn } = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => LoginUser(values),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitFn(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>

              <FormControl>
                <Input placeholder="johndoe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>

              <FormControl>
                {/*  I twisted the Input so as to be able to use the show-password functionality */}
                {/* added the 'PASS' prop so as to make it work */}
                <Input placeholder="" {...field} type="password" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full text-center">
          {/* I added the variant login in the button.tsx */}
          <Button variant="login" size="lg" type="submit" disabled={loading}>
            {loading && <ArrowPathIcon className="h-4 w-4 animate-spin mr-4" />}

            {loading ? "Submitting" : "Submit"}
          </Button>
        </div>
      </form>
      <ShowToaster />
    </Form>
  );
};

export default LoginFormLayout;
