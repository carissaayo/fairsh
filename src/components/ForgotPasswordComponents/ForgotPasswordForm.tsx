import toast from "react-hot-toast";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import axios from "axios";
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
import ShowToaster from "../core/ShowToaster";

const ForgotPasswordForm = () => {
  const setLoading = useResetPasswordStore((state) => state.setLoading);
  const setVerified = useResetPasswordStore((state) => state.setVerified);
  const verified = useResetPasswordStore((state) => state.verified);
  const setSuccess = useResetPasswordStore((state) => state.setSuccess);
  const success = useResetPasswordStore((state) => state.success);
  const setEmail = useResetPasswordStore((state) => state.setEmail);
  const resetAction = useResetPasswordStore((state) => state.resetAction);

  const loading = useResetPasswordStore((state) => state.loading);
  const formSchema = z.object({
    email: z
      .string()
      .min(2, {
        message: "please enter the verification code sent to your mail",
      })
      .max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // setVerified(true);
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/admin/auth/reset_password`, {
        ...values,
        resetAction: "sendCode",
      })
      .then(function (response) {
        console.log(response.data);
        setEmail(values.email);
        setLoading(false);

        setVerified(true);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);

        if (error.request.status === 401) {
          setVerified(true);
          return toast.success(error.response.data.message);
        }

        toast.error(error.message);
      });

    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full space-y-8  ${
          verified ? "-translate-x-full absolute hidden" : "translate-x-0"
        }`}
      >
        {/* email Feild */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="">
                <FormLabel>Enter your email address</FormLabel>

                <FormControl>
                  <Input type="email" {...field} />
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
      <ShowToaster />
    </Form>
  );
};

export default ForgotPasswordForm;
