import { serverSideFunction } from "@/utils/server-utils";
import ClientRoutePage from "../client-route/page";
export default async function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <div>
      <ClientRoutePage>
        <h1>Server Route {result}</h1>
      </ClientRoutePage>
    </div>
  );
}
