import { SheetIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SheetComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Sheet>
        <SheetTrigger>
          <Button>
            <SheetIcon className="" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-discord text-white w-[400px] sm:w-[540px]"
        >
          <SheetHeader>
            DPE.png
            <SheetTitle>
              <SheetDescription>
                <div className="flex flex-col p-4>">
                  <Link href="http://localhost:3000/">Formulário</Link>
                  <Link href="/dados">Dados</Link>
                </div>
              </SheetDescription>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
