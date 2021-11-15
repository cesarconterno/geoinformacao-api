import * as mongoose from 'mongoose';

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        description: "A single position",
        type: "array",
        minItems: 2,
        items: [
            { type: "number" },
            { type: "number" }
         ],
        additionalItems: false,
        required: true
    }
});

export default PointSchema;



