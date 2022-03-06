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

        if (!height) {
            res.status(400).json({ error: 'Height is required' });
            return;
        }

        if (parseInt(height) <= 72) {
            res.status(400).json({ error: 'Height must be greater or equal to 72' });
            return;
        }

        if (parseInt(height) > 120) {
            res.status(400).json({ error: 'Max height is: 120' });
            return;
        }

        const command = 'python3 ' + process.env.PI_DESK_PATH + '/set-height.py ' + height;
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
