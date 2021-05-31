import {createResponse} from '../helper/responseBody';

const healthCheck = (req, res, next)=> {
    res.body = new createResponse(200, 'health is ok');
    next();
};

const healthErrorCheck = (req, res, next)=> {
    res.body = new createResponse(500, 'test error', null, 'test_error');
    next();
};

export const TestController = {
    healthCheck,
    healthErrorCheck
} 

