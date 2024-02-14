import axios from "axios";
import toast from "react-hot-toast";
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
import { Button } from "../ui/button";

import { useResetPasswordStore } from "../../context/auth/changePasswordStore";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const ResetPasswordForm = () => {
  const loading = useResetPasswordStore((state) => state.loading);
  const verified = useResetPasswordStore((state) => state.verified);
  const success = useResetPasswordStore((state) => state.success);
  const email = useResetPasswordStore((state) => state.email);
  const resetAction = useResetPasswordStore((state) => state.resetAction);
  const setLoading = useResetPasswordStore((state) => state.setLoading);
  const setSuccess = useResetPasswordStore((state) => state.setSuccess);
  const setVerified = useResetPasswordStore((state) => state.setVerified);

  const formSchema = z.object({
    passwordResetCode: z
      .string()
      .min(3, {
        message: "please enter the verification code sent to your mail",
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
      passwordResetCode: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/admin/auth/reset_password`, {
        ...values,
        resetAction,
        email,
      })
      .then(function (response) {
        console.log(response.data);

        setLoading(false);

        setSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);

        if (error.request.status === 400) {
          setVerified(false);
          // setSuccess(true)
          return toast.error(error.response.data.message);
        }
        setVerified(false);

        toast.error(error.message);
      });
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full space-y-8  ${
          verified ? "translate-x-0 " : "translate-x-full absolute hidden"
        }
        ${success ? "-translate-x-full absolute hidden" : ""}
        `}
      >
        {/* passwordResetCode Feild */}
        <FormField
          control={form.control}
          name="passwordResetCode"
          render={({ field }) => (
            <FormItem>
              <div className="">
                <FormLabel>Enter the code</FormLabel>

                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <div className="">
                <FormLabel>New Password</FormLabel>

                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <div className="">
                <FormLabel>Confirm New Password</FormLabel>

                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </div>
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
    </Form>
  );
};

export default ResetPasswordForm;
