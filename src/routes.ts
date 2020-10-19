import {Express} from 'express';
import hospital_controller from './controllers/hospital.controller';

const routes = (app: Express):void => {
    app.use('/v1/hospital', hospital_controller);
};

export default routes;