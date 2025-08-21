"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";
import { ReactNode } from "react";

export default function ClientRoutePage({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <div>
      <h1 style={{ color: theme.colors.secondary }}>Client Route</h1>
      <p>{result}</p>
      {children}
    </div>
  );
}
