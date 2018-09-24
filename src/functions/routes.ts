import * as routes from "next-routes";

// @ts-ignore
export default routes()
  .add("admin/index")
  .add("admin/login")
  .add("admin/register")
  .add("index", "/:organisation");
