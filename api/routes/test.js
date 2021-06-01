import Express from "express";
import { middleware } from "../middleware";
import { TestController } from "./../controller/test";

const TestRouter = new Express.Router();

const { healthCheck, healthErrorCheck, tokenHealth, getTestToken } = TestController;

TestRouter.get("/health", healthCheck);
TestRouter.get("/health-error", healthErrorCheck);
TestRouter.get("/check-token-header", middleware.tokenValidation, tokenHealth);
TestRouter.post('/test-token', getTestToken);

export default TestRouter;
