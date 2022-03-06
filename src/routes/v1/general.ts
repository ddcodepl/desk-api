import { Router } from 'express';
import GeneralController from '../../controllers/v1/GeneralController';
import {catchAsync} from "../../middlewares/errors";

export default () => {
    const api = Router();

    api.get('/height', catchAsync(GeneralController.getHeight));

    api.post('/set-height', catchAsync(GeneralController.setHeight));

    return api;
};
