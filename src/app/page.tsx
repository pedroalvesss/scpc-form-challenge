"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div
        id="FormSpace"
        className="bg-discord w-180 h-200 flex flex-col items-center shadow-2xl"
      >
        <h1 className="mt-5 text-4xl font-bold text-amber-50">
          Formulário TOP 2000
        </h1>
        <div className="flex flex-col mt-5">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex w-full max-w-lg flex-col items-center gap-4"
          >
            <input
              {...register("userName")}
              type="text"
              placeholder="Nome"
              className="bg-white h-10 w-60 rounded-md px-3 py-1"
            />

            <input
              {...register("Teste")}
              type="text"
              placeholder="Teste"
              className="bg-white h-10 w-60 rounded-md px-3 py-1"
            />

            <Button type="submit" className="h-auto w-30 font-bold">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
