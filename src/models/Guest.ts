import { model, Schema } from 'mongoose';

interface Guest {
    name: string
    phone: string
    email: string
    type: string
}

export default model<Guest>(
    'Guests',
    new Schema<Guest>({
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true
        }
    })
);

export type { Guest }