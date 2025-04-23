import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Control, FieldErrors } from "react-hook-form";
import { Input } from "../ui/input";
import { FormData } from "@/schemas/formSchema";

type TextFieldComponentProps = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};

export default function TextFieldCargaHorariaComponent({
  control,
  errors,
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
                type="number"
                min={1}
                placeholder="Digite a carga horária estimada do evento"
                {...field}
              />
            </FormControl>
            {errors.cargaHorariaEstimada && (
              <p className="text-red-500 text-sm">
                {errors.cargaHorariaEstimada.message}
              </p>
            )}
          </FormItem>
        )}
      />
    </div>
  );
}
