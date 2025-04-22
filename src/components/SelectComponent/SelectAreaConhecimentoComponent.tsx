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

type areaConhecimento = {
  id: number;
  nome: string;
};

export default function SelectAreaConhecimentoComponent({
  control,
  errors,
}: SelectComponentProps) {
  const [areaConhecimento, setAreaConhecimento] = useState<areaConhecimento[]>(
    []
  );
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const fetchAreaConhecimento = async () => {
      try {
        const data = await GetListsServices.GetAreaConhecimento();
        if (Array.isArray(data) && data.length > 0) {
          setAreaConhecimento(data);
        } else {
          setErro(true);
        }
      } catch (error) {
        console.error("Erro ao buscar área do conhecimento:", error);
        setErro(true);
      }
    };

    fetchAreaConhecimento();
  }, []);

  return (
    <FormField
      control={control}
      name="areaConhecimento"
      render={({ field }) => (
        <FormItem className="w-100">
          <FormLabel className="text-white w-full">
            Área do Conhecimento
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="text-white w-100">
                <SelectValue placeholder="Selecione a área do conhecimento" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {erro ? (
                <SelectItem value="erro" disabled>
                  Nenhuma área do conhecimento encontrada
                </SelectItem>
              ) : (
                areaConhecimento.map((areaConhecimento) => (
                  <SelectItem
                    key={areaConhecimento.id}
                    value={String(areaConhecimento.nome)}
                  >
                    {areaConhecimento.nome}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          {errors.areaConhecimento && (
            <span className="text-red-500">
              {errors.areaConhecimento.message}
            </span>
          )}
        </FormItem>
      )}
    />
  );
}
