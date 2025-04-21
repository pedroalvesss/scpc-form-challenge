import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormData } from "@/schemas/formSchema";
import { useEffect, useState } from "react";
import { GetModalidade } from "@/services";

type SelectComponentProps = {
  control: Control<FormData>;
};

type Modalidade = {
  id: number;
  nome: string;
};

export default function SelectModalidadeComponent({
  control,
}: SelectComponentProps) {
  const [modalidadestate, setModalidadeState] = useState<Modalidade[]>([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const fetchModalidades = async () => {
      try {
        const data = await GetModalidade;
        if (Array.isArray(data) && data.length > 0) {
          setModalidadeState(data);
        } else {
          setErro(true);
        }
      } catch (error) {
        console.error("Erro ao buscar modalidades:", error);
        setErro(true);
      }
    };

    fetchModalidades();
  }, []);

  return (
    <FormField
      control={control}
      name="modalidade"
      render={({ field }) => (
        <FormItem className="w-100">
          <FormLabel className="text-white w-full">Modalidade</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="text-white w-100">
                <SelectValue placeholder="Selecione a modalidade do evento" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {erro ? (
                <SelectItem value="erro" disabled>
                  Nenhuma modalidade encontrada
                </SelectItem>
              ) : (
                modalidadestate.map((modalidade) => (
                  <SelectItem key={modalidade.id} value={String(modalidade.id)}>
                    {modalidade.nome}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
