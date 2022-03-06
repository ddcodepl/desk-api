import path from 'path';
import multer from 'multer';
import { Request } from 'express';

/**
 *
 * Select destination of the file and maximum file size.
 * Default file size is 5MB
 *
 * @param {String} dest
 * @param {Integer} fileSize
 */
const fileUpload = (dest: string, fileSize = 5 * 1024 * 1000) => {
    const storage = multer.diskStorage({
        destination(req: Request, file: Record<any, any>, cb: any) {
            cb(null, dest);
        },
        filename(req: Request, file: Record<any, any>, cb: any) {
            cb(null, path.parse(file.originalname).name + path.extname(file.originalname));
        },
    });

    const upload = multer({
        limits: { fileSize },
        storage,
    });

    return upload;
};

// eslint-disable-next-line import/prefer-default-export
export { fileUpload };
