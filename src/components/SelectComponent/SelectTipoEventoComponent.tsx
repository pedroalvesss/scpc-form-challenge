import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Control, FieldErrors } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormData } from "@/schemas/formSchema";
import { useEffect, useState } from "react";
import { GetListsServices } from "@/services";

type SelectComponentProps = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};

type TipoEvento = {
  id: number;
  nome: string;
};

export default function SelectTipoEventoComponent({
  control,
  errors,
}: SelectComponentProps) {
  const [tipostate, setTipoState] = useState<TipoEvento[]>([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const fetchTipoEvento = async () => {
      try {
        const data = await GetListsServices.GetTipoCapacitacao();
        if (Array.isArray(data) && data.length > 0) {
          setTipoState(data);
        } else {
          setErro(true);
        }
      } catch (error) {
        console.error("Erro ao buscar tipo de evento:", error);
        setErro(true);
      }
    };

    fetchTipoEvento();
  }, []);

  return (
    <FormField
      control={control}
      name="tipo"
      render={({ field }) => (
        <FormItem className="w-100">
          <FormLabel className="text-white w-full">Tipo de Evento</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="text-white w-100">
                <SelectValue placeholder="Selecione o tipo de evento" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {erro ? (
                <SelectItem value="erro" disabled>
                  Nenhum tipo de evento encontrado
                </SelectItem>
              ) : (
                tipostate.map((tipo) => (
                  <SelectItem key={tipo.id} value={String(tipo.id)}>
                    {tipo.nome}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          {errors.tipo && (
            <p className="text-red-500">
              {errors.tipo.message || "Campo obrigatório"}
            </p>
          )}
        </FormItem>
      )}
    />
  );
}
