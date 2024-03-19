import { useNavigation } from "@/lib/utils.ts";
import { credentials } from "@/lib/types";
import { LoginFormSchema } from "@/lib/schema.ts";
import { account } from "@/AppWrite";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";

const LoginForm = () => {
  const { performNavigation } = useNavigation();

  const createEmailSession = async (data: credentials) => {
    const email = data.email;
    const password = data.password;

    try {
      await account.createEmailSession(email, password);
      performNavigation("/editor");
    } catch (error) {
    }
  };

  const onSubmit = async (values: z.infer<typeof LoginFormSchema>) => {
    await createEmailSession(values);
  };

  const [isPending] = useTransition();
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  className="w-full sm:w-[22rem]"
                  placeholder="..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  className="w-full sm:w-[22rem]"
                  placeholder="..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          className="w-full font-bold py-1 text-md"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
