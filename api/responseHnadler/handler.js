import http from 'http';
import { ERROR_CONSTANT } from './error';

export const resHandler = (res, data, error, message)=> {
    if(data && !error) {

        const obj  = {
            success: true,
            data: data,
            statusCode: 200
        }
        return res.status(200).send(obj);
    } 

    if(error || !data) {
        //check able to find error for constant
        let errorDetails = ERROR_CONSTANT[error] ||ERROR_CONSTANT.internal_error;

        if(message) {
            errorDetails['message'] = message;
        }


        const obj = {
            success: false,
            data: data,
            errorDetails: errorDetails,
            statusCode: errorDetails.status 
        }

        console.log('errorDetails.status ', errorDetails.status);

        return res.status( errorDetails.status || 500).json(obj);
    }

}