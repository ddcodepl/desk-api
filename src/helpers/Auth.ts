import { NextFunction, Request, Response } from 'express';

const verifyToken = (req: Record<any, any>, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;

    if (typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).send({ message: 'Forbidden' });
    }
};

// eslint-disable-next-line import/prefer-default-export
export { verifyToken };
