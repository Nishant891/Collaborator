import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string(),
});

export const SignUpFormSchema = z.object({
  username: z.string().min(2, { message: "Username must be atleast 2 characters" }).max(50, { message: "Username cannot be more than 50 characters" }), 
  email: z.string().email("Please enter a valid email"),
  password: z.string(),
});