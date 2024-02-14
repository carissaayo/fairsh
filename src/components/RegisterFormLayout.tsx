import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import axiosClient from "../lib/axiosClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

import { useRegisterStore } from "../context/auth/registerStore";
import { useVerifyEmailStore } from "../context/auth/verifyEmailStore";

const RegisterFormLayout = () => {
  const navigate = useNavigate();

  // Register Store
  const loading = useRegisterStore((state) => state.loading);
  const setLoading = useRegisterStore((state) => state.setLoading);
  const setSuccess = useRegisterStore((state) => state.setSuccess);
  const setUser = useRegisterStore((state) => state.setUser);

  // Verify Email Store
  const setIsEmailVerified = useVerifyEmailStore((state) => state.setVerified);

  const formSchema = z.object({
    fullName: z
      .string()
      .min(2, {
        message: "fullname can not be empty ",
      })
      .max(50),

    email: z
      .string()
      .min(2, {
        message: "email can not be empty and must be a valid email",
      })
      .max(50),
    password: z
      .string()
      .min(8, {
        message: "password can not be empty and must not be less 8 characters ",
      })
      .max(50),
    confirmPassword: z
      .string()
      .min(8, {
        message:
          "confirm password can not be empty and must not be less 8 characters ",
      })
      .max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const RegisterUser = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    await axiosClient
      .post(`/admin/auth/sign_up`, { ...values })
      .then((response) => {
        console.log(response.data);
        setUser(response.data?.data);
        localStorage.setItem("data", JSON.stringify(response.data?.data));
        setLoading(false);
        setSuccess(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.request.status === 400) {
          return toast.error(
            "Your email must be added before you can sign up. Please contact admin."
          );
        }
        toast.error(error.message);
        return error;
      });
  };
  const { mutate: submitFn } = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => RegisterUser(values),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitFn(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Fullname Feild */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
              <FormLabel>email</FormLabel>

              <FormControl>
                <Input type="email" {...field} />
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

        {/* Confirm Password Field */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
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

export default RegisterFormLayout;
