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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function Home() {
  const form = useForm();

  const handleFormSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div
        id="FormSpace"
        className="bg-discord w-250 h-200 flex flex-col items-center shadow-2xl rounded-md"
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
              <div id="selectdiv" className="flex w-205 flex-wrap gap-4">
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
              </div>

              <div id="textDiv" className="flex w-205 flex-wrap gap-4">
                <FormField
                  control={form.control}
                  name="tituloEvento"
                  render={({ field }) => (
                    <FormItem className="w-100">
                      <FormLabel className="text-white">
                        Título do Evento
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-white"
                          type="text"
                          placeholder="Digite o Título do Evento"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cargaHorariaEstimada"
                  render={({ field }) => (
                    <FormItem className="w-100">
                      <FormLabel className="text-white">
                        Carga Horária
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-white"
                          type="text"
                          placeholder="Digite a carga horária estimada do evento"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nomeInstituicao"
                  render={({ field }) => (
                    <FormItem className="w-100">
                      <FormLabel className="text-white">
                        Nome da instituição
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="text-white"
                          type="text"
                          placeholder="Digite o nome da instituição"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div id="dateDiv" className="flex w-205 flex-col gap-4">
                <FormField
                  control={form.control}
                  name="dataInicio"
                  render={({ field }) => (
                    <FormItem className="w-100">
                      <FormLabel className="text-white w-full">
                        Data do Início da Capacitação
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Selecione uma data</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dataFim"
                  render={({ field }) => (
                    <FormItem className="w-100">
                      <FormLabel className="text-white w-full">
                        Data do Fim da Capacitação
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Selecione uma data</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dataExped"
                  render={({ field }) => (
                    <FormItem className="w-100">
                      <FormLabel className="text-white w-full">
                        Data da Expedição da Capacitação
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Selecione uma data</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
              </div>

              <div id="certDiv" className="flex w-205 flex-col">
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
