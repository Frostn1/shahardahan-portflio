"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "./locale-switcher";
import { panels } from "../layout/panels";
import { getDictionary } from "@/lib/get-dictionary";
import { VisuallyHidden } from "radix-ui";

interface MobileMenuProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["navbar"];
}

export function MobileMenu({ dictionary }: MobileMenuProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="h-9 w-9"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[150px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>
              <VisuallyHidden.Root>{dictionary.title}</VisuallyHidden.Root>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-6">
            <nav className="flex flex-col gap-2">
              {panels.map(({ name, id }: { name: string; id: string }) => (
                <SheetClose asChild key={id}>
                  <Link
                    href={`#${id}`}
                    className="flex items-center py-3 px-4 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {dictionary[name as keyof typeof dictionary]}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="border-t pt-4">
              <div className="flex items-center justify-left">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
