import {Schema, model, Document} from 'mongoose';

const HospitalSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    numeroPacientesActivos:{
        type: Number
    } ,
    cantidadMaximaPacientes:{
        type: Number
    } ,
    cantidadPersonal:{
        type: Number
    } ,
    dateInsert: {
        type: Date,
        default: Date.now
    },
    dateUpdate: {
        type: Date
    }
})

interface IHospitalSchema extends Document {
    name: string;
    numeroPacientesActivos:number;
    cantidadMaximaPacientes:number;
    cantidadPersonal:number;
    dateInsert: Date;
    dateUpdate: Date;
}

export default model<IHospitalSchema>('Hospital', HospitalSchema);