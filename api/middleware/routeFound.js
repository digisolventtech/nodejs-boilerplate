export const routeMatched = (req, res, next)=> {
    console.log('Inside this middleware');
    req.isMatched = true;
    next();
}