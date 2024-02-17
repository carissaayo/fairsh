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
import { useVerifyEmailStore } from "../../context/auth/verifyEmailStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import axiosClient from "../../lib/axiosClient";
import { useMutation } from "@tanstack/react-query";

const VerifyEmailForm = () => {
  const navigate = useNavigate();

  const loading = useVerifyEmailStore((state) => state.loading);
  const setLoading = useVerifyEmailStore((state) => state.setLoading);
  const setVerified = useVerifyEmailStore((state) => state.setVerified);
  const formSchema = z.object({
    emailCode: z
      .string()
      .min(2, {
        message: "please enter the verification code sent to your mail",
      })
      .max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailCode: "",
    },
  });
  const verifyEmail = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    await axiosClient
      .post(`/admin/auth/verify_email`, { ...values })
      .then((response) => {
        console.log(response.data);

        setLoading(false);
        setVerified(true);
        // toast.custom(
        //   <div className="bg-white h-full sm:w-[450px] border p-4">
        //     <p className="text-center mb-2">
        //       Your email has been verified successfully
        //     </p>
        //     <div className="w-full flex items-center justify-center z-40">
        //       <Button
        //         className=""
        //         onClick={() => {
        //           toast.remove();
        //           navigate(-1);
        //         }}
        //       >
        //         Go Back
        //       </Button>
        //     </div>
        //   </div>
        // );
        // navigate("/account");
        toast.success("Your email has been verified!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.response.status === 400) {
          return toast.error(error.response.data.message);
        }
        if (error.response.status === 403) {
          return toast.error(error.response.data.message);
        }
        toast.error(error.message);
      });
  };
  const { mutate: submitFn } = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => verifyEmail(values),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitFn(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full space-y-8 translate-x-0`}
      >
        {/* email Feild */}
        <FormField
          control={form.control}
          name="emailCode"
          render={({ field }) => (
            <FormItem>
              <div className="">
                <FormLabel>Enter the verification code</FormLabel>

                <FormControl>
                  <Input {...field} />
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

export default VerifyEmailForm;
