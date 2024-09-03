import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <h1>Sorry, we can't find that page.</h1>
      <Link to={"/"}></Link>
    </>
  );
};
export default NotFound;
