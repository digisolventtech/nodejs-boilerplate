import http from 'http';

class ResponseBody {
    constructor(statusCode, message, data, error) {
        this.statusCode = http.STATUS_CODES[statusCode];
        this.message = message;
        this.data = data;
        this.error = error;
    }
} 

export const createResponse = ResponseBody;