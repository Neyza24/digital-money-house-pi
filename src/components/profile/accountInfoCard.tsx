'use client';

import { useAuth } from "@/hooks/useAuth"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { InfoDetailCopy } from "./infoDetailCopy";


export const AccountInfoCard = () => {
  
  const { accountData } = useAuth();

  return (
    <Card className="bg-dark-01">
      <CardHeader className="text-white">
        <CardTitle className="text-sm md:text-base font-normal">
          Copia tu cvu o alias para ingresar o transferir dinero desde otra
          cuenta
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
          <InfoDetailCopy label="CVU" value={accountData?.cvu} />
          <InfoDetailCopy label="Alias" value={accountData?.alias} />
      </CardContent>
    </Card>
  );
};
