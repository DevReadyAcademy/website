import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
// @ts-ignore
import SEO from "../components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <SEO
        title="404 Not Found | DevReady"
        description="Page not found."
        noindex={true}
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <Link to="/" className="link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
