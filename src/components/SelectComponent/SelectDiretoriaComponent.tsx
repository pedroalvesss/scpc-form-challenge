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
import { useEffect, useState } from "react";
import { GetDiretoriaServices } from "@/services";
import { FormData } from "@/schemas/formSchema";

type SelectComponentProps = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};

type Diretoria = {
  id: number;
  nome: string;
};

export default function SelectDiretoriaComponent({
  control,
  errors,
}: SelectComponentProps) {
  const [diretorias, setDiretorias] = useState<Diretoria[]>([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const fetchDiretorias = async () => {
      try {
        const data = await GetDiretoriaServices.GetDiretorias();
        if (Array.isArray(data) && data.length > 0) {
          setDiretorias(data);
        } else {
          setErro(true);
        }
      } catch (error) {
        console.error("Erro ao buscar diretorias:", error);
        setErro(true);
      }
    };

    fetchDiretorias();
  }, []);

  return (
    <FormField
      control={control}
      name="diretoria"
      render={({ field }) => (
        <FormItem className="w-100">
          <FormLabel className="text-white w-full">Diretoria</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="text-white w-100">
                <SelectValue placeholder="Selecione uma diretoria" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {erro ? (
                <SelectItem value="erro" disabled>
                  Nenhuma diretoria encontrada
                </SelectItem>
              ) : (
                diretorias.map((diretoria) => (
                  <SelectItem key={diretoria.id} value={String(diretoria.id)}>
                    {diretoria.nome}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          {errors.diretoria && (
            <p className="text-red-500 text-sm">{errors.diretoria.message}</p>
          )}
        </FormItem>
      )}
    />
  );
}
