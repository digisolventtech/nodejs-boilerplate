
import CORS from 'cors';

//make your cors setting here
export const cors = (app)=> {
    
    const corsOptions = {
        origin: process.env.ALLOW_CORS_ORIGIN || '*',
        methods: process.env.ALLOW_CORS_METHODS || ''
    };

    //if don't want cors options, then uncomment
    //app.use(CORS());

    app.use(CORS(corsOptions));
}