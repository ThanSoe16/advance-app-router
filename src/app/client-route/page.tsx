"use client";

import { useTheme } from "@/components/theme-provider";

export default async function ClientRoutePage() {
  const theme = useTheme();

  return (
    <div>
      <h1 style={{ color: theme.colors.secondary }}>Client Route</h1>
    </div>
  );
}
