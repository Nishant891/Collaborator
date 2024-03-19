import SignUpForm from "@/components/build/forms/signup-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SignUp = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center background">
      <Card>
        <CardHeader>
          <CardTitle>SIGNUP</CardTitle>
          <CardDescription>Let's get started</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <a href="/" className="hover:text-blue-500">Forgot Password?</a>
          <a href="/login" className="hover:text-blue-500">Already have an account</a>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignUp;
