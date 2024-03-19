import LoginForm from "@/components/build/forms/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LogIn = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center background">
      <Card>
        <CardHeader>
          <CardTitle>LOGIN</CardTitle>
          <CardDescription>Welcome Back!</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <a href="/signup" className="hover:text-blue-500">Don't have an account</a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LogIn;
