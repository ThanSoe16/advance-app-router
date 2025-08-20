"use client";
import { serverSideFunction } from "@/utils/server-utils";
export default async function ClientRoutePage() {
  const result = serverSideFunction();
  return (
    <div>
      <h1>Client Route {result}</h1>
    </div>
  );
}
