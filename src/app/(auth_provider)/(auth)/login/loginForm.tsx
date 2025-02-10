'use client';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { emailSchema, passwordSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";




const LoginForm = () => {
  const { email, setEmail, loginUser, error } = useAuth();

  const [step, setStep] = useState(1); // Controla el paso actual

  // Formulario para el email
  const emailForm = useForm<{ email: string }>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  // Formulario para la contraseña
  const passwordForm = useForm<{ password: string }>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
    },
  });

  console.log("login password", passwordForm.formState.errors);

  // Manejo de envío del email
  const onSubmitEmail = (data: { email: string }) => {
    setEmail(data.email);
    setStep(2);
  };

  // Manejo de envío de la contraseña
  const onSubmitPassword = async (data: { password: string }) => {
    await loginUser(email, data.password);
  };

  return (
    <Card className="w-[350px] mx-auto mt-20 bg-inherit border-none">
      <CardHeader>
        <CardTitle className="text-white text-center font-semibold text-xl">
          {step === 1 ? "¡Hola! Ingresá tu e-mail" : "Ingresa tu contraseña"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <Form {...emailForm}>
            <form
              onSubmit={emailForm.handleSubmit(onSubmitEmail)}
              className="space-y-4"
            >
              <FormField
                control={emailForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Tu email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="primary w-full" size="lg">
                Continuar
              </Button>
            </form>
          </Form>
        )}

        {step === 2 && (
          <Form {...passwordForm}>
            <form
              onSubmit={passwordForm.handleSubmit(onSubmitPassword)}
              className="space-y-4"
            >
              <FormField
                control={passwordForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Tu contraseña"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="primary w-full" size="lg">
                Continuar
              </Button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
};

export default LoginForm;