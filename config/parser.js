import BodyParser from 'body-parser';

export const bodyParser = (app, express)=> {
    const options1 = {
        limit: process.env.BODY_LIMIT || '5mb'
    };

    const option2 =  {
        limit: process.env.BODY_LIMIT || '5mb',
        extended: true
    };

    app.use(express.json(options1));

    app.use(express.urlencoded(option2));
};