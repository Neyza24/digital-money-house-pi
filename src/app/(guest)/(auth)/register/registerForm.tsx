"use client";
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/hooks/useAuth';

import { registerUserSchema } from '@/schemas/registerSchema';
import { RegisterUserData } from '@/types/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";




const RegisterForm = () => {


    const {user, registerUser, error} = useAuth();

    const form = useForm<RegisterUserData>({
      resolver: zodResolver(registerUserSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        dni: 0,
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      },
    });

    const {reset} = form;


    console.log(form.formState.errors);
    console.log('register form', user)


    const onSubmit = form.handleSubmit(async (values) => {
        console.log(values);
        // send data to the server
        await registerUser(values);
        reset();

    });



  return (
    <Form {...form}>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
        <FormField
          name="firstName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" {...field} placeholder="Nombre*" />
              </FormControl>
              {form.formState.errors?.firstName && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors?.firstName.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          name="lastName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" {...field} placeholder="Apellido*" />
              </FormControl>
              {form.formState.errors?.lastName && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors?.lastName.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          name="dni"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" {...field} placeholder="DNI*" />
              </FormControl>
              {form.formState.errors?.dni && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors?.dni.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" {...field} placeholder="Email*" />
              </FormControl>
              {form.formState.errors?.email && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors?.email.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" {...field} placeholder="password*" />
              </FormControl>
              {form.formState.errors?.password && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors?.password.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" {...field} placeholder="confirmar parsword*" />
              </FormControl>
              {form.formState.errors?.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors?.confirmPassword.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" {...field} placeholder="phone*" />
              </FormControl>
              {form.formState.errors?.phone && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors?.phone.message}
                </p>
              )}
            </FormItem>
          )}
        />

        {/* {isCompleted && <p className="text-green-500">Formulario completado</p>} */}
        <Button type="submit" variant="primary" size="lg">
            Submit
          </Button>
          {error && <p className='text-red-500'>{error}</p>}
      </form>
    </Form>
  );
}

export default RegisterForm