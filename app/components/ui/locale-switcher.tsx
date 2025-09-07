"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { i18n } from "../../../i18n-config";
import { Languages } from "lucide-react";

// Map each locale to its flag + label
const localeFlags: Record<string, string> = {
  en: "🇬🇧",
  he: "🇮🇱",
};

const localePretty: Record<string, string> = {
  en: "English",
  he: "עברית",
};

export function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => {
          // Strip first segment if it’s a locale and replace with new one
          const segments = pathname?.split("/") ?? [];
          if (segments.length > 1 && i18n.locales.includes(segments[1])) {
            segments[1] = locale;
          } else {
            segments.splice(1, 0, locale);
          }
          const href = segments.join("/") || `/${locale}`;

          return (
            <DropdownMenuItem key={locale} asChild>
              <Link href={href} prefetch>
                <span className="mr-2">{localeFlags[locale] ?? "🌐"}</span>
                {localePretty[locale] ?? locale.toUpperCase()}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
