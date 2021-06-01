import { decodeToken } from "../helper/jwt";


export const TokenValidation = (req, res, next)=> {

    //configure your token field in .env
    const tokenFieldName = process.env['TOKEN_FIELD'] || 'auth_token';
    if(!req.headers || !req.headers[tokenFieldName]) {
        next('invalid_token');
    } else {
        // console.log('Token is: ', req.headers[tokenFieldName]);
        try {
            const token = decodeToken(req.headers[tokenFieldName]);
            //do your code here..
            next();
        } catch(err) {
            next('invalid_token');
        }
    }
}