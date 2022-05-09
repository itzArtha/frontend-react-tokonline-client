import { Route } from "react-router-dom";
import Dashboard from "../user/Dashboard";

const Router = () => {
  return (
    <>
      <Route path={"/"} component={Dashboard} exact />
    </>
  );
};
export default Router;
