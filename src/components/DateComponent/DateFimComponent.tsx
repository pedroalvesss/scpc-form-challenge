import { Control, FieldErrors } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { FormData } from "@/schemas/formSchema";

type DateFimComponentProps = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};

export default function DateFimComponent({
  control,
  errors,
}: DateFimComponentProps) {
  return (
    <FormField
      control={control}
      name="finalCurso"
      render={({ field }) => (
        <FormItem className="w-100">
          <FormLabel className="text-white w-full">
            Data do Fim da Capacitação
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date < new Date("1900-01-01")}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <div className="fixed justify-center items-center mt-16">
            {errors.finalCurso && (
              <p className="text-red-500 text-sm">
                {errors.finalCurso.message}
              </p>
            )}
          </div>
        </FormItem>
      )}
    />
  );
}
