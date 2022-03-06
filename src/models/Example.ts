import { model, Schema } from 'mongoose';

interface Example {
    name: string
    number: number
}

const schema = new Schema<Example>(
    {
        name: { type: String, required: true },
        oldSize: { type: Number, required: true },
    },
    {
        timestamps: true,
    },
);

const ExampleModel = model('Example', schema);

export default ExampleModel;

