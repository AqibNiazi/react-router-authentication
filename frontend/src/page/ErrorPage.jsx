import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error Occurred!";
  let messsage = "Something went wrong!";
  if (error.status === 500) {
    messsage = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not Found!";
    messsage = "Could not find the page you are looking for.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{messsage}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
