import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function RootError() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <div>
      An error was encountered. Error message: "{errorMessage}"
    </div>
  );
}
