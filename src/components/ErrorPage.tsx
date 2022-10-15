interface ErrorProps {
  error: Error;
}

function ErrorPage({ error }: ErrorProps) {
  return <>An error has occurred: {error.message}</>;
}

export default ErrorPage;
