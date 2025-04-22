import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Control, FieldErrors } from "react-hook-form";
import { Input } from "../ui/input";
import { FormData } from "@/schemas/formSchema";

type TextFieldComponentProps = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};

export default function TextFieldNomeInstituicaoComponent({
  control,
  errors,
}: TextFieldComponentProps) {
  return (
    <div>
      <FormField
        control={control}
        name="nomeInstituicao"
        render={({ field }) => (
          <FormItem className="w-100">
            <FormLabel className="text-white">Nome da instituição</FormLabel>
            <FormControl>
              <Input
                className="text-white"
                type="text"
                placeholder="Digite o nome da instituição"
                {...field}
              />
            </FormControl>
            {errors.nomeInstituicao && (
              <p className="text-red-500 text-sm">
                {errors.nomeInstituicao.message}
              </p>
            )}
          </FormItem>
        )}
      />
    </div>
  );
}
