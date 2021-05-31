import { resolve } from "path";
import { readdirSync } from "fs";
import { createResponse } from "../helper/responseBody";
import { resHandler } from "../responseHnadler/handler";

export const initRoute = async (app) => {
  //read current folder..

  const pathPrefix = process.env.PATH_PREFIX || "digisolvent";

  const routeFiles = readdirSync(resolve(__dirname, "."));
  // console.log(routeFiles);

  for (let file of routeFiles) {
    if (file == "index.js") {
      continue;
    }
    console.log("File name: ", file);
    const allRoutes = await import(resolve(__dirname, `${file}`));
    if (
      allRoutes &&
      allRoutes.default &&
      allRoutes.default.stack &&
      allRoutes.default.stack.length
    ) {
      const path = file
        .toLocaleLowerCase()
        .replace(".js", "")
        .replace(/_| /gi, "-");
      console.log("Path is: ", path);
      app.use(`/${pathPrefix}/${path}`, allRoutes.default);
    }
  }

  app.use("*", (req, res, next) => {
    const { method, originalUrl } = req;
    const message = `Cannot match ${method}:${originalUrl}`;
    res.body = {
      error: "invalid_path",
      message: message
    };
    next();
  });

  app.use((req, res) => {
    console.log("request body is: ", res.body);
    return resHandler(res, res.body ? res.body["data"] : "", res.body? res.body["error"] : '', res.body? res.body.message : '');
  });
};
