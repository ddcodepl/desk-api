import { NextFunction, Request, Response } from 'express';
import * as fs from "fs";

const GeneralController = {
    async getHeight(req: Request, res: Response, next: NextFunction) {
        console.log(process.env.PI_DESK_PATH);
        const filePath = process.env.PI_DESK_PATH + '/height.txt';
        const height = await GeneralController.readFile(filePath);
        res.status(200).json({ height });
    },

    async setHeight(req: Request, res: Response, next: NextFunction) {
        const height = req.body.height;
        const command = 'python3 ' + process.env.PI_DESK_PATH + '/setHeight.py ' + height;
        await GeneralController.executeCommand(command);
        res.status(200).json({ height });
    },

    executeCommand(command: string) {
        return new Promise((resolve, reject) => {
            const exec = require('child_process').exec;
            // @ts-ignore
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve(stdout);
            });
        });
    },

    async readFile(filePath: string) {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }

};

export default GeneralController;
