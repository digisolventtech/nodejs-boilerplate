import Express from "express";
import { cors } from "./config/cors";
import { bodyParser } from "./config/parser";
import Helmet from "helmet";
import { routeInitialize } from "./config/router";

import Colors from "colors";
import { initDb } from "./config/db";

const app = new Express();

const PORT = process.env.PORT;

console.log("Server Start initializing");

module.exports = async () => {
  try {
    console.log(Colors.yellow("App initializing started"));

    //init db
    initDb(app);
    
    //set cors
    cors(app);

    //set parser
    bodyParser(app, Express);

    //set helemt
    app.use(Helmet());

    await routeInitialize(app);

    app.listen(PORT, () => {
      console.log(Colors.green(`APp IS RUNNING ON PORT ${PORT}`));
    });

    console.log(Colors.green("App initializing done"));
  } catch (err) {
    console.log(Colors.red(`Server initialize error: ${err}`));
    return process.exit(1);
  }
};
