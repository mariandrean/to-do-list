import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <h2>Dang! Wrong path</h2>;
  }

export default ErrorBoundary