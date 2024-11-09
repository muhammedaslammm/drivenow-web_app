import { useRouteError } from "react-router-dom";

let Error = () => {
  let error = useRouteError();
  console.log(error);

  return (
    <div className="error__container">
      <span>Oops! Page not found</span>
    </div>
  );
};

export default Error;
