import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RegisterForm from "./registerForm";

export default function SignInForm() {


  return (
    <Card className="w-[350px] md:w-[750px] mx-auto  bg-inherit border-none">
      <CardHeader>
        <CardTitle className="text-white text-center font-semibold text-xl">
          Crear cuenta
        </CardTitle>
        {/* {loading && <span>loading data...</span>} */}
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
}
