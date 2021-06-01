import { routeMatched } from './routeFound';
import {TokenValidation} from './tokenValidation';

export const middleware = {
    tokenValidation: TokenValidation,
    routeSanity: routeMatched
};