import mongoose  from "mongoose";
import Colors from "colors";

export const initDb = (app) => {
  if (!process.env.MONGO_CONNECTION_STRING) {
    throw "add connection string in env";
  }

  mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.connection.on("connected", () => {
  console.log(Colors.green("[Info] Mongo Connection Established"));
});

mongoose.connection.on("reconnected", () => {
  console.log(Colors.yellow("[Info] Mongo Connection Re-established"));
});

mongoose.connection.on("disconnected", () => {
  console.log(Colors.red("[Error] Mongo Connection Disconnected"));
});

mongoose.connection.on("close", () => {
  console.log(Colors.red("[Info] Mongo Connection Closed"));
});

mongoose.connection.on("error", (error) => {
  console.log(Colors.red("[Error] Mongo Connection ERROR: ", error));
  throw error;
});

process.on("SIGINT", function () {
    mongoose.connection.close();
});
