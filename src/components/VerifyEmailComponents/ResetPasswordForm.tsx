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

const ResetPasswordForm = ({
  verified,
  done,
  setDone,
}: {
  verified: boolean;
  setDone: (verified: boolean) => void;
  done: boolean;
}) => {
  const formSchema = z.object({
    verificationCode: z
      .string()
      .min(3, {
        message: "please enter the verification code sent to your mail",
      })
      .max(50),
    newPassword: z
      .string()
      .min(8, {
        message: "password can not be empty or less than 8 characters",
      })
      .max(50),
    confirmNewPassword: z
      .string()
      .min(8, {
        message: "password can not be empty or less than 8 characters",
      })
      .max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setDone(true);
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full space-y-8  ${
          verified ? "translate-x-0 " : "translate-x-full absolute hidden"
        }
        ${done ? "-translate-x-full absolute hidden" : ""}
        `}
      >
        {/* verificationCode Feild */}
        <FormField
          control={form.control}
          name="verificationCode"
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
          <Button variant="login" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
