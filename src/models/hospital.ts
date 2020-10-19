import {Schema, model, Document} from 'mongoose';

const HospitalSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
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
    dateInsert: Date;
    dateUpdate: Date;
}

export default model<IHospitalSchema>('Hospital', HospitalSchema);