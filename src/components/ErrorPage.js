import React from 'react';
import { useRouteError } from 'react-router-dom';


const ErrorPage = ({ errorCode, errorMessage }) => {

  const Err =useRouteError()
  console.log(Err)
  return (
    <div className="error-container">
      <h2> Opp's!!</h2>
      <h2> Something Went Wrong !</h2>
      <h1>{Err.status}:{Err.statusText}</h1>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
