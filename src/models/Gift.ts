import { model, Schema } from 'mongoose';

interface Gift {
    shortName: string
    longName: string
    description: string
    models: { url: string, siteName: string, value: string }[]
    guestId: string
}

const ModelSchema = new Schema({ url: String, siteName: String, value: String })

export default model<Gift>(
    'Gifts',
    new Schema<Gift>({
        shortName: {
            type: String,
            required: true
        },
        longName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        models: {
            type: [ModelSchema],
            required: true,
        },
        guestId: {
            type: String,
            required: true
        },
    })
);

export type { Gift }