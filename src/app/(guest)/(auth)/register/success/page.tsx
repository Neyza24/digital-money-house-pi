import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Card className="w-[350px] md:w-[750px] mx-auto my-auto bg-inherit border-none shadow-none flex flex-col items-center justify-between gap-4">
      <CardHeader>
        <CardTitle className="text-white text-center font-semibold text-7xl">
          Registro Exitoso
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <Image
          className="dark:invert mx-auto"
          src="/check.svg"
          alt="Success check icon"
          width={92}
          height={80}
          priority
        />
        <CardDescription className="text-white text-base">
          Tu cuenta ha sido creada exitosamente
        </CardDescription>
      </CardContent>
      <CardHeader>
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "primary", size: "lg" }),
            "px-32"
          )}
        >
          Continuar
        </Link>
      </CardHeader>
    </Card>
  );
}
