

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-2xl text-gray-600">Oops! Page not found.</p>
      <p className="mt-2 text-gray-500">
        The page you are looking for might have been removed or doesn't exist.
      </p>
    </div>
  );
};
export default NotFound;
