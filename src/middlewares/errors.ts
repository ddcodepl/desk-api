import { NextFunction, Request, Response } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction) => {
    const err = new Error('404 page not found');
    next(err);
};

const catchAsync = (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: any) => next(err));
};

const catchErrors = (err: any, req: Request, res: Response): void => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
    });
};

export { notFound, catchAsync, catchErrors };
