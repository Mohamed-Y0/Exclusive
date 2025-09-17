import { useRouteError } from "react-router-dom";

function Error() {
  const { error } = useRouteError() as { error: Error };
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <p className="text-4xl font-semibold text-red-500">
        Something Went Wrong
      </p>
      <p className="text-3xl">{(error as Error)?.message}</p>
    </div>
  );
}

export default Error;
