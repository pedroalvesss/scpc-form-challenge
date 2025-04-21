import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Control } from "react-hook-form";
import { Input } from "../ui/input";
import { FormData } from "@/schemas/formSchema";

type TextFieldComponentProps = {
  control: Control<FormData>;
};

export default function TextFieldCargaHorariaComponent({
  control,
}: TextFieldComponentProps) {
  return (
    <div>
      <FormField
        control={control}
        name="cargaHorariaEstimada"
        render={({ field }) => (
          <FormItem className="w-100">
            <FormLabel className="text-white">Carga Horária</FormLabel>
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
    </div>
  );
}
