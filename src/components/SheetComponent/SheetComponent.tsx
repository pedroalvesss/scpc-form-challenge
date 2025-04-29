import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";

export default function SheetComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Sheet>
        <SheetTrigger className="bg-neutral-900 rounded-md p-2 cursor-pointer">
          <Menu className="w-7 h-7 rounded-md text-white" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-discord text-white w-[400px] sm:w-[540px]"
        >
          <SheetHeader>
            DPE.png
            <SheetTitle>
              <SheetDescription className="flex flex-col">
                <Link href="http://localhost:3000/">Formulário</Link>
                <Link href="/dados">Dados</Link>
              </SheetDescription>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
