import {body} from 'express-validator';

const validations = [
    body('name').exists().withMessage('Name is required'),
    body('name').if(body('name').exists()).isLength({min: 8}).withMessage('Min length of name 8 characters')

];

export default validations;