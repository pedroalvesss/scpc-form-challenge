import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Control } from "react-hook-form";
import { Input } from "../ui/input";
import { FormData } from "@/schemas/formSchema";

type TextFieldComponentProps = {
  control: Control<FormData>;
};

export default function TextFieldTitulodoEventoComponent({
  control,
}: TextFieldComponentProps) {
  return (
    <div>
      <FormField
        control={control}
        name="tituloEvento"
        render={({ field }) => (
          <FormItem className="w-100">
            <FormLabel className="text-white">Título do Evento</FormLabel>
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
    </div>
  );
}
