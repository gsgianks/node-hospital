import {Request, Response, Router} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import Hospital from '../models/hospital';
import {ErrorHandler, handleError} from '../error';
import body_hospital_validations from '../middlewares/hospital/hospital.validator';
import validation_handler from '../middlewares/validator';

const router = Router();

// ============
// POST
// Register an hospital
// Public
// ============

router.post('/',body_hospital_validations, validation_handler, async(req: Request, res: Response) => {
    const {name, numeroPacientesActivos, cantidadMaximaPacientes, cantidadPersonal}= req.body;
    try{
        let hospital = await Hospital.findOne({name});
        if(hospital){
            const custom = new ErrorHandler(400, 'hospital already exists');
            handleError(custom, req, res);
        }else{

            hospital = new Hospital({
                name,
                numeroPacientesActivos, 
                cantidadMaximaPacientes, 
                cantidadPersonal
            });

            await hospital.save();

            const payload = {
                hospital: {
                    id: hospital.id
                }
            }

            res.status(200).json({
                data: {payload},
                msj: 'hospital Created'
            });
        }
    }catch(err){
        const custom = new ErrorHandler(500, 'Server Error');
        handleError(custom, req, res);
    }
})

export default router;