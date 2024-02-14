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

const SubmitEmailForm = () => {
  const formSchema = z.object({
    email: z
      .string()
      .min(8, {
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
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full space-y-8`}
        // ${
        //     "-translate-x-full absolute hidden" : "translate-x-0"
        // }
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
          <Button variant="login" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SubmitEmailForm;
