"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "@/schemas/formSchema";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SelectDiretoriaComponent from "@/components/SelectComponent/SelectDiretoriaComponent";
import SelectAreaConhecimentoComponent from "@/components/SelectComponent/SelectAreaConhecimentoComponent";
import SelectTipoEventoComponent from "@/components/SelectComponent/SelectTipoEventoComponent";
import SelectModalidadeComponent from "@/components/SelectComponent/SelectModalidadeComponent";
import TextFieldTitulodoEventoComponent from "@/components/TextFieldComponent/TextFieldTitulodoEventoComponent";
import TextFieldCargaHorariaComponent from "@/components/TextFieldComponent/TextFieldCargaHorariaComponent";
import TextFieldNomeInstituicaoComponent from "@/components/TextFieldComponent/TextFieldNomeInstituicaoComponent";
import DateInicioComponent from "@/components/DateComponent/DateInicioComponent";
import DateFimComponent from "@/components/DateComponent/DateFimComponent";
import DateExpedComponent from "@/components/DateComponent/DateExpedComponent";

export default function Home() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleFormSubmit = (data: FormData) => {
    const eventosSalvos = localStorage.getItem("dadosForm");

    let eventosArray: any[] = [];

    try {
      const parsed = JSON.parse(eventosSalvos || "[]");
      eventosArray = Array.isArray(parsed) ? parsed : [parsed];
    } catch (error) {
      console.error("Erro ao receber os dados, inicializando vazio...", error);
      eventosArray = [];
    }

    eventosArray.push(data);
    localStorage.setItem("dadosForm", JSON.stringify(eventosArray));
    console.log("Dados enviados com sucesso!");
    alert(JSON.stringify(data));
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div
        id="FormSpace"
        className="bg-discord w-250 h-150 flex flex-col items-center shadow-2xl rounded-md"
      >
        <h1 className="mt-5 text-4xl font-bold text-amber-50">
          Formulário TOP 2000
        </h1>

        <div className="flex flex-col mt-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="flex w-full max-w-lg flex-col items-center gap-4"
            >
              <div id="selectdiv" className="flex w-205 flex-wrap gap-4">
                <SelectDiretoriaComponent control={form.control} />

                <SelectAreaConhecimentoComponent control={form.control} />

                <SelectTipoEventoComponent control={form.control} />

                <SelectModalidadeComponent control={form.control} />
              </div>

              <div id="textDiv" className="flex w-205 flex-wrap gap-4">
                <TextFieldTitulodoEventoComponent
                  control={form.control}
                  errors={form.formState.errors}
                />

                <TextFieldCargaHorariaComponent
                  control={form.control}
                  errors={form.formState.errors}
                />

                <TextFieldNomeInstituicaoComponent
                  control={form.control}
                  errors={form.formState.errors}
                />
              </div>

              <div id="dateDiv" className="flex w-205">
                <DateInicioComponent
                  control={form.control}
                  errors={form.formState.errors}
                />

                <DateFimComponent
                  control={form.control}
                  errors={form.formState.errors}
                />

                <DateExpedComponent
                  control={form.control}
                  errors={form.formState.errors}
                />
              </div>

              <div id="certDiv" className="flex w-205 flex-col mt-5">
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
