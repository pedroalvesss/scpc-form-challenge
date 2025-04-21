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

type SelectComponentProps = {
  control: Control<FormData>;
};

export default function SelectTipoEventoComponent({
  control,
}: SelectComponentProps) {
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
              <SelectItem value="1">Valor Tipo 1</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
