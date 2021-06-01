import { resolve } from "path";
import { readdirSync } from "fs";
import { createResponse } from "../helper/responseBody";
import { resHandler } from "../responseHnadler/handler";
import { middleware } from "./../middleware";

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

    /*
    Note: export the route using default
    */

    if (
      allRoutes &&
      allRoutes.default &&
      allRoutes.default.stack &&
      allRoutes.default.stack.length
    ) {
    //   console.log("router are: ", allRoutes.default);
    //   for (let layer of allRoutes.default.stack) {
    //     if (layer && layer.name && layer.name != "routeMatched") {
    //       console.log("Layer is: ", layer.handle, typeof layer.handle);
    //       //   layer.handle.unshift(middleware.routeSanity);
    //     }
    //   }

    //   console.log("router are: ", allRoutes.default);

      const path = file
        .toLocaleLowerCase()
        .replace(".js", "")
        .replace(/_| /gi, "-");
      console.log("Path is: ", path);
      app.use(`/${pathPrefix}/${path}`, allRoutes.default);
    }
  }

  app.use("*", (req, res, next) => {
    console.log("path match ", res.body);
    if (!req.route || (req.route && !req.route.path)) {
      const { method, originalUrl } = req;
      const message = `Cannot match ${method}:${originalUrl}`;
      res.body = {
        error: "invalid_path",
        message: message,
      };
    }

    return resHandler(
        res,
        res.body ? res.body["data"] : "",
        res.body ? res.body["error"] : "",
        res.body ? res.body.message : ""
      );
  });

  app.use((error, req, res, next) => {
    // console.log("request error is: ", error);
    //do your error handling here
    return resHandler(
      res,
     '',
      error
    );
  });
};
