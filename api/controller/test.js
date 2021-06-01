import { createToken } from "../helper/jwt";
import { SampleWorker } from "./../worker/sample";

const healthCheck = (req, res, next) => {
  // console.log("Inside here");
  res.body = {
    data: "server health is ok",
  };
  next();
};

const healthErrorCheck = (req, res, next) => {
  res.body = {
    error: "test_error",
  };
  next();
};

const tokenHealth = async (req, res, next) => {
  // console.log("Token health controller");

  res.body = await SampleWorker.getTestData();
  next();
};

const getTestToken = (req, res, next) => {
  res.body = {
    data: createToken(req.body),
  };
  next();
};

export const TestController = {
  healthCheck,
  healthErrorCheck,
  tokenHealth,
  getTestToken,
};
