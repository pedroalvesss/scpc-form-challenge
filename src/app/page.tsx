"use client";

import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function Home() {
  const form = useForm();

  const handleFormSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center mt-5">
      <div
        id="FormSpace"
        className="bg-discord w-180 h-200 flex flex-col items-center shadow-2xl rounded-md"
      >
        <h1 className="mt-5 text-4xl font-bold text-amber-50">
          Formulário TOP 2000
        </h1>

        <div className="flex flex-col mt-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="flex w-full max-w-lg flex-col items-center gap-4"
            >
              <FormField
                control={form.control}
                name="teste"
                render={({ field }) => (
                  <FormItem className="w-100">
                    <FormLabel className="text-white">Teste</FormLabel>
                    <FormControl>
                      <Input
                        className="text-white"
                        type="text"
                        placeholder="Exemplo"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teste2"
                render={({ field }) => (
                  <FormItem className="w-100">
                    <FormLabel className="text-white">Teste</FormLabel>
                    <FormControl>
                      <Input
                        className="text-white"
                        type="text"
                        placeholder="Exemplo"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="SelectDiretoria"
                render={({ field }) => (
                  <FormItem className="w-100">
                    <FormLabel className="text-white w-full">
                      Diretoria
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="text-white w-100">
                          <SelectValue placeholder="Selecione a diretoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Diretoria do xaropinho">
                          Diretoria do xaropinho
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <div className="">
                <Label className="text-white mb-2" htmlFor="picture">
                  Certificado
                </Label>
                <Input
                  id="certificado"
                  type="file"
                  className="text-white w-100"
                />
              </div>

              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
