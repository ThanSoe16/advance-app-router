import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";
export default async function ServerRoutePage() {
  const result = serverSideFunction();
  const clientResult = clientSideFunction();
  return (
    <div>
      <h1>Server Route {result}</h1>
      <p>{clientResult}</p>
    </div>
  );
}
