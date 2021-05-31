import { initRoute } from "./../api/routes";
import Colors from 'colors';


export const routeInitialize = async (app)=> {
    await initRoute(app);
    console.log(Colors.green('App apis initialize'));
}
