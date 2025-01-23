
'use client';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";



export default function SignUpForm() {


    const [step, setStep] = useState(1); // Controla el paso actual
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (email) {
            setStep(2);
        } else {
            alert("Ingresa tu correo electrónico");
        }
    };

    const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica para enviar los datos al backend
        console.log({ email, password });

      };

    return (
      <Card className="w-[350px] mx-auto mt-20 bg-inherit border-none">
        <CardHeader>
          <CardTitle className="text-white text-center font-semibold text-xl">
            {step === 1 ? '¡Hola! Ingresá tu e-mail' : 'Ingresa tu contraseña'} 
          </CardTitle>
        </CardHeader>
        <CardContent>
            {step === 1 &&(
                <form onSubmit={handleEmailSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Correo electrónico" 
                    />
                  </div>
                  
                  <Button variant="primary" size="lg" className="" type="submit">
                    Continuar
                  </Button>
                  <Button variant="default"  size="lg" className="">
                    Crear cuenta
                  </Button>
                </div>
              </form>

            )}

            {step === 2 && (
                <form onSubmit={handleLoginSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña" />
                  </div>
                  
                  <Button variant="primary" size="lg" className="" type="submit">
                    Continuar
                  </Button>
                </div>
              </form>
            )}

          
        </CardContent>
        
      </Card>
    );
  }