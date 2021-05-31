import Express from "express";
import { TestController } from "./../controller/test";


const TestRouter = new Express.Router();

const {healthCheck, healthErrorCheck} = TestController;

TestRouter.get('/health', healthCheck);
TestRouter.get('/health-error', healthErrorCheck);

export default TestRouter;
