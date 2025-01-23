"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useAuthContext } from "@/context/AuthContext";

export default function SignInForm() {

  const {
    handleRegisterChange,
    handleRegisterSubmit,
    loading,
    registerData,
    
  } = useAuthContext();


  return (
    <Card className="w-[350px] md:w-[750px] mx-auto  bg-inherit border-none">
      <CardHeader>
        <CardTitle className="text-white text-center font-semibold text-xl">
          Crear cuenta
        </CardTitle>
        {loading && <span>loading data...</span>}
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleRegisterSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Input
            type="text"
            name="firstName"
            value={registerData.firstName}
            onChange={handleRegisterChange}
            required
            placeholder="Nombre*"
          />

          <Input
            type="text"
            name="lastName"
            value={registerData.lastName}
            onChange={handleRegisterChange}
            required
            placeholder="Apellido*"
          />

          <Input
            type="text"
            name="dni"
            value={registerData.dni}
            onChange={handleRegisterChange}
            required
            placeholder="DNI*"
          />

          <Input
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleRegisterChange}
            required
            placeholder="Email*"
          />

          <Input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleRegisterChange}
            required
            placeholder="password*"
          />

          <Input
            type="password"
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleRegisterChange}
            required
            placeholder="password*"
          />

          <Input
            type="phone"
            name="phone"
            value={registerData.phone}
            onChange={handleRegisterChange}
            required
            placeholder="phone*"
          />

          <Button type="submit" variant="primary" size="lg">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
