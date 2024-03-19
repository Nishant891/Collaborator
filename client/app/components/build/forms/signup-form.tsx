import { useNavigation } from "@/lib/utils.ts";
import { credentials } from "@/lib/types";
import { SignUpFormSchema } from "@/lib/schema.ts";
import { account } from "@/AppWrite";
import { ID } from "appwrite";
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

const SignUpForm = () => {
  const { performNavigation } = useNavigation();

  const createUser = async (data: credentials) => {
    const username = data.username;
    const email = data.email;
    const password = data.password;

    try {
      //create a new user and an email session in appwrite.
      await account.create(ID.unique(), email, password, username);
      await account.createEmailSession(email, password);
      performNavigation("/editor");
    } catch (error) {
    }
  };

  const onSubmit = async (values: z.infer<typeof SignUpFormSchema>) => {
    await createUser(values);
  };

  const [isPending] = useTransition();
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
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

export default SignUpForm;
