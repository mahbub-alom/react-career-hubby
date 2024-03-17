import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-10">
      <h2>Oops!!!!</h2>
      <button className="bg-blue-500 text-white p-2 rounded-md">
        <Link to="/">Go to Home
        </Link>
      </button>
    </div>
  );
};

export default ErrorPage;
