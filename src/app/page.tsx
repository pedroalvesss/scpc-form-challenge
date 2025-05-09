"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/schemas/formSchema";
import type { FormData } from "@/schemas/formSchema";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
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
import { CapacitacaoServices } from "@/services";
import { ObjectUtils } from "@/utils/objectUtils";

export default function Home() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleFormSubmit = async (data: FormData) => {
    const formattedData = ObjectUtils.objectToFormData({
      nome: data.tituloEvento,
      cargaHorariaEstimada: Number(data.cargaHorariaEstimada),
      nomeInstituicao: data.nomeInstituicao,
      inicioCurso: data.inicioCurso.toISOString().split("T")[0],
      finalCurso: data.finalCurso.toISOString().split("T")[0],
      dataExpedido: data.dataExpedido.toISOString().split("T")[0],
      certificado: data.certificado,
      diretoriaId: Number(data.diretoria),
      servidorId: 329,
      tipo: {
        id: Number(data.tipo),
      },
      modalidade: {
        id: Number(data.modalidade),
      },
      areaConhecimento: {
        id: Number(data.areaConhecimento),
      },
    });

    try {
      await CapacitacaoServices.PostCapacitacao(formattedData);
      console.log("Capacitação enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao enviar os dados. Tente novamente mais tarde.");
      return;
    }

    console.log("Dados enviados com sucesso!");
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div
        id="FormSpace"
        className="bg-discord w-250 h-auto flex flex-col items-center shadow-2xl rounded-md"
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
                <SelectDiretoriaComponent
                  control={form.control}
                  errors={form.formState.errors}
                />

                <SelectAreaConhecimentoComponent
                  control={form.control}
                  errors={form.formState.errors}
                />

                <SelectTipoEventoComponent
                  control={form.control}
                  errors={form.formState.errors}
                />

                <SelectModalidadeComponent
                  control={form.control}
                  errors={form.formState.errors}
                />
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
                <Controller
                  name="certificado"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      id="certificado"
                      type="file"
                      className="text-white w-100"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                  )}
                />
                {form.formState.errors.certificado && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof form.formState.errors.certificado?.message ===
                    "string"
                      ? form.formState.errors.certificado.message
                      : ""}
                  </p>
                )}
              </div>
              <div className="flex w-150 justify-center items-center h-20">
                <Button type="submit" className="cursor-pointer w-full">
                  Enviar
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
