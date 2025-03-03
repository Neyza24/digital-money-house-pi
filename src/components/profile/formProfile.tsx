"use client";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { ProfileUserData } from "@/types/auth";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PencilIcon } from "lucide-react";
import { toast } from "sonner";

export const FormProfile = () => {
  const { user, updateUserData} = useAuth();
  const [editMode, setEditMode] = useState({
    fullname: false,
    dni: false,
    phone: false,
    password: false,
  });

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<ProfileUserData>({});

  const enableEdit = (field: keyof typeof editMode) => {
    setEditMode((prev) => ({ ...prev, [field]: true }));
  };

  const cancelEdit = (field: keyof typeof editMode) => {
    setEditMode((prev) => ({ ...prev, [field]: false }));
  };

  const onSubmit = async (data: ProfileUserData) => {
    const fullname = getValues("firstname") || "";
    const [firstname, lastname] = fullname.split(" ");

    const updatePayload = {
      firstname,
      lastname,
      email: data.email,
      dni: Number(data.dni),
      phone: data.phone,
      password: data.password,
    };
    try {
      if (user && user.id) {
        await updateUserData(updatePayload, user.id);
      } else {
        throw new Error("User is not authenticated");
      }

      toast.success("Perfil actualizado correctamente!", {
        duration: 5000,
        position: "top-right",
      });

      setEditMode({
        fullname: false,
        dni: false,
        phone: false,
        password: false,
      });
      reset({ ...data });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      toast.error("Error al actualizar el perfil.", {
        duration: 5000,
        position: "top-right",
      });
    }
  };

  const isEditing = Object.values(editMode).some(Boolean);

  if (!user) return <div>Cargando...</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Tus datos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* Campo: Email */}
        <div className="grid grid-cols-6 items-center py-1">
          <span className="text-sm md:text-base col-span-6 md:col-span-2">
            Email:
          </span>
          <span className="mt-1 text-sm md:text-base md:col-span-4 text-black/50">
            {user.email}
          </span>
        </div>
        <hr className="mt-0 bg-slate-300 border-slate-300" />
        {/* Campo: Nombre (fullname) */}
        <div className="grid grid-cols-6 items-center py-1">
          <span className="text-sm md:text-base col-span-6 md:col-span-2 mb-2 md:mb-0">
            Nombre:
          </span>
          {!editMode.fullname ? (
            <div className="flex justify-between items-center gap-2 col-span-6 md:col-span-4">
              <span className="text-sm md:text-base text-black/50">
                {user.firstname} {user.lastname}
              </span>
              <button
                type="button"
                onClick={() => enableEdit("fullname")}
                className=""
              >
                <PencilIcon size={20} className="text-gray-300" />
              </button>
            </div>
          ) : (
            <div className="flex gap-4 col-span-6 md:col-span-4">
              <Input
                {...register("firstname")}
                placeholder="Ingresa tu nombre y apellido"
                className="h-10"
              />
              <Button
                variant="ghost"
                type="button"
                onClick={() => cancelEdit("fullname")}
                className="text-sm text-gray-500"
              >
                Cancelar
              </Button>
            </div>
          )}
          {errors.firstname && (
            <p className="text-red-500 text-sm col-span-6 mt-2">
              {errors.firstname.message}
            </p>
          )}
        </div>
        <hr className="mt-0 bg-slate-300 border-slate-300" />
        {/* Campo: DNI */}
        <div className="grid grid-cols-6 items-center py-1">
          <span className="text-sm md:text-base col-span-6 md:col-span-2">
            CUIT:
          </span>
          <span className="mt-1 text-sm md:text-base md:col-span-4 text-black/50">
            {user.dni}
          </span>
        </div>
        <hr className="mt-0 bg-slate-300 border-slate-300" />
        {/* Campo: Teléfono */}
        <div className="grid grid-cols-6 items-center py-1">
          <span className="text-sm md:text-base col-span-6 md:col-span-2 mb-2 md:mb-0">
            Teléfono:
          </span>
          {!editMode.phone ? (
            <div className="flex justify-between items-center gap-2 col-span-6 md:col-span-4">
              <span className="text-sm md:text-base text-black/50">
                {user.phone}
              </span>
              <button onClick={() => enableEdit("phone")}>
                <PencilIcon size={20} className="text-gray-300" />
              </button>
            </div>
          ) : (
            <div className="flex gap-4 col-span-6 md:col-span-4">
              <Input
                {...register("phone")}
                placeholder="Ingresa tu número de celular"
                className="h-10"
              />
              <Button
                variant="ghost"
                onClick={() => cancelEdit("phone")}
                className="text-sm text-gray-500"
              >
                Cancelar
              </Button>
            </div>
          )}
          {errors.phone && (
            <p className="text-red-500 text-sm col-span-6">
              {errors.phone.message}
            </p>
          )}
        </div>
        <hr className="mt-0 bg-slate-300 border-slate-300" />
        {/* Campo: Password */}
        <div className="grid grid-cols-6 items-center py-1">
          <span className="text-sm md:text-base col-span-6 md:col-span-2 mb-2 md:mb-0">
            Contraseña:
          </span>
          {!editMode.password ? (
            <div className="flex justify-between items-center gap-2 col-span-6 md:col-span-4">
              <span className="text-sm md:text-base text-black/50">
                ********
              </span>
              <button onClick={() => enableEdit("password")}>
                <PencilIcon size={20} className="text-gray-300" />
              </button>
            </div>
          ) : (
            <div className="flex gap-4 col-span-6 md:col-span-4">
              <Input
                type="password"
                {...register("password")}
                placeholder="Nueva contraseña"
                className="h-10"
              />
              <Button
                variant="ghost"
                onClick={() => cancelEdit("password")}
                className="text-sm text-gray-500"
              >
                Cancelar
              </Button>
            </div>
          )}
          {errors.password && (
            <p className="text-red-500 text-sm col-span-6">
              {errors.password.message}
            </p>
          )}
        </div>
        <hr className="mt-0 bg-slate-300 border-slate-300" />
      </CardContent>
      <CardFooter className="grid grid-cols-6">

        {isEditing && (
          <Button
            variant="dark"
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="col-start-6 col-span-1"
          >
            Guardar
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
